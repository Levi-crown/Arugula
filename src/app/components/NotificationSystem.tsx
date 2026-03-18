import { AlertTriangle, CheckCircle, XCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export interface Notification {
  id: string;
  type: "success" | "warning" | "critical";
  message: string;
}

interface NotificationSystemProps {
  notifications: Notification[];
  onClose: (id: string) => void;
}

export function NotificationSystem({ notifications, onClose }: NotificationSystemProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 w-96">
      {notifications.map((notif) => (
        <NotificationToast key={notif.id} notification={notif} onClose={onClose} />
      ))}
    </div>
  );
}

function NotificationToast({ notification, onClose }: { notification: Notification; onClose: (id: string) => void }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => onClose(notification.id), 300);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notification.id, onClose]);

  const getStyles = () => {
    switch (notification.type) {
      case "success":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          text: "text-green-800",
        };
      case "warning":
        return {
          bg: "bg-orange-50",
          border: "border-orange-200",
          icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
          text: "text-orange-800",
        };
      case "critical":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          icon: <XCircle className="w-5 h-5 text-red-600" />,
          text: "text-red-800",
        };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`glass-card ${styles.bg} ${styles.border} border-2 p-4 flex items-start gap-3 ${
        isExiting ? "notification-exit" : "notification-enter"
      }`}
    >
      {styles.icon}
      <div className="flex-1">
        <p className={`font-semibold ${styles.text}`}>{notification.message}</p>
      </div>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(() => onClose(notification.id), 300);
        }}
        className="p-1 hover:bg-black/5 rounded transition-colors"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
}
