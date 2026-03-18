import { 
  Droplet, 
  Thermometer, 
  Wind, 
  Activity, 
  Zap,
  Wifi,
  WifiOff,
  TrendingUp,
  TrendingDown,
  Minus,
  X
} from "lucide-react";
import { useState } from "react";
import { NotificationSystem, Notification } from "../components/NotificationSystem";

interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  icon: any;
  status: "normal" | "warning" | "critical";
  min: number;
  max: number;
  percentage: number;
}

const sensorData: SensorData[] = [
  { id: "moisture", name: "Soil Moisture", value: 45, unit: "%", icon: Droplet, status: "normal", min: 30, max: 70, percentage: 65 },
  { id: "ph", name: "pH Level", value: 6.5, unit: "pH", icon: Activity, status: "normal", min: 6.0, max: 7.5, percentage: 70 },
  { id: "temp", name: "Temperature", value: 28, unit: "°C", icon: Thermometer, status: "normal", min: 20, max: 35, percentage: 53 },
  { id: "humidity", name: "Humidity", value: 65, unit: "%", icon: Wind, status: "normal", min: 40, max: 80, percentage: 81 },
  { id: "ec", name: "EC Level", value: 1.8, unit: "mS/cm", icon: Zap, status: "warning", min: 1.0, max: 2.5, percentage: 53 },
];

const sensorHealth = [
  { name: "DHT22", status: "online" },
  { name: "Soil Sensor", status: "online" },
  { name: "EC Sensor", status: "offline" },
  { name: "pH Sensor", status: "online" },
];

export function DashboardPage() {
  const [selectedSensor, setSelectedSensor] = useState<SensorData | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: "1", type: "warning", message: "Low Soil Moisture Detected" },
    { id: "2", type: "success", message: "Irrigation Completed Successfully" },
  ]);

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "warning":
        return "text-orange-600 bg-orange-50";
      case "critical":
        return "text-red-600 bg-red-50";
      default:
        return "text-green-600 bg-green-50";
    }
  };

  const getGlowClass = (status: string) => {
    switch (status) {
      case "warning":
        return "glow-warning";
      case "critical":
        return "glow-critical";
      default:
        return "glow-normal";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "warning":
        return <TrendingDown className="w-4 h-4" />;
      case "critical":
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 relative">
      {/* Notification System */}
      <NotificationSystem notifications={notifications} onClose={removeNotification} />

      {/* Sensor Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensorData.map((sensor) => {
          const Icon = sensor.icon;
          return (
            <div
              key={sensor.id}
              onClick={() => setSelectedSensor(sensor)}
              className={`glass-card p-6 cursor-pointer ${getGlowClass(sensor.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-xl text-white shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>
                <div className={`px-3 py-1 rounded-full flex items-center gap-1 ${getStatusColor(sensor.status)}`}>
                  {getStatusIcon(sensor.status)}
                  <span className="text-xs font-semibold capitalize">{sensor.status}</span>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{sensor.name}</h3>
              <p className="text-3xl font-bold text-gray-800 mb-3">
                {sensor.value}
                <span className="text-lg text-gray-500 ml-1">{sensor.unit}</span>
              </p>
              
              {/* Radial Progress Indicator */}
              <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    sensor.status === "warning" ? "bg-gradient-to-r from-orange-400 to-orange-600" :
                    sensor.status === "critical" ? "bg-gradient-to-r from-red-400 to-red-600" :
                    "bg-gradient-to-r from-green-400 to-green-600"
                  }`}
                  style={{ width: `${sensor.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Sensor Health */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Sensor Health</h3>
          <div className="space-y-3">
            {sensorHealth.map((sensor, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
                <div className="flex items-center gap-3">
                  {sensor.status === "online" ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <Wifi className="w-5 h-5 text-green-600" />
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <WifiOff className="w-5 h-5 text-red-600" />
                    </>
                  )}
                  <span className="font-medium text-gray-800">{sensor.name}</span>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    sensor.status === "online"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {sensor.status === "online" ? "Online" : "Offline"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tank Levels */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Tank Levels</h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Water Tank */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-4 border-gray-300 shadow-inner">
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 transition-all duration-500" style={{ height: "70%" }}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <p className="text-lg font-bold text-gray-800">3.5L</p>
                    <p className="text-xs text-gray-600">/ 5L</p>
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-3">Water Tank</p>
              <p className="text-xs text-green-600">70% Full</p>
            </div>

            {/* Fertilizer Tank */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-40 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-4 border-gray-300 shadow-inner">
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-green-600 via-green-500 to-green-400 transition-all duration-500" style={{ height: "40%" }}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <p className="text-lg font-bold text-gray-800">2.0L</p>
                    <p className="text-xs text-gray-600">/ 5L</p>
                  </div>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-3">Fertilizer</p>
              <p className="text-xs text-orange-600">40% Full</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side Panel for Sensor Details */}
      {selectedSensor && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-end z-40">
          <div className="glass-modal w-full max-w-md h-full rounded-l-3xl rounded-r-none p-6 overflow-y-auto animate-[slideInRight_0.3s_ease-out]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">{selectedSensor.name}</h2>
              <button
                onClick={() => setSelectedSensor(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Current Value */}
            <div className="mb-6 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <p className="text-sm text-gray-600 mb-1">Current Value</p>
              <p className="text-5xl font-bold text-green-600">
                {selectedSensor.value} <span className="text-2xl">{selectedSensor.unit}</span>
              </p>
              <div className="mt-4 h-3 bg-white/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all"
                  style={{ width: `${selectedSensor.percentage}%` }}
                />
              </div>
            </div>

            {/* Threshold Settings */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Threshold Settings</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minimum Value
                </label>
                <input
                  type="number"
                  defaultValue={selectedSensor.min}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum Value
                </label>
                <input
                  type="number"
                  defaultValue={selectedSensor.max}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  step="0.1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alert Mode
                </label>
                <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>SMS + Email</option>
                  <option>Email Only</option>
                  <option>SMS Only</option>
                  <option>Disabled</option>
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedSensor(null)}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setNotifications([...notifications, { 
                    id: Date.now().toString(), 
                    type: "success", 
                    message: `${selectedSensor.name} settings updated!` 
                  }]);
                  setSelectedSensor(null);
                }}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
