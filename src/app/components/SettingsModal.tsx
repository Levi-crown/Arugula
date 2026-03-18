import { X, User, Camera, Lock, Info, Users } from "lucide-react";
import { useState } from "react";
import logoImage from "../../assets/b38d497ad9b9c16cc0169383c1e4996cdcf70870.png";

interface SettingsModalProps {
  onClose: () => void;
}

type TabType = "profile" | "about" | "developers";

const developers = [
  {
    name: "Chris",
    role: "Lead Developer",
    description: "Full-stack development and system architecture",
    avatar: "C",
  },
  {
    name: "Sheila",
    role: "UI/UX Designer",
    description: "Interface design and user experience",
    avatar: "S",
  },
  {
    name: "Jhonel",
    role: "Backend Developer",
    description: "Server infrastructure and database management",
    avatar: "J",
  },
  {
    name: "Eron",
    role: "Hardware Engineer",
    description: "Sensor integration and IoT systems",
    avatar: "E",
  },
];

export function SettingsModal({ onClose }: SettingsModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("profile");
  const [profileName, setProfileName] = useState("John Farmer");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);

  const handleSaveProfile = () => {
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (currentPassword && newPassword) {
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otpCode];
      newOtp[index] = value;
      setOtpCode(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-modal w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-6 border-b border-gray-200 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "profile"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <User className="w-4 h-4" />
              Profile
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "about"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Info className="w-4 h-4" />
              About Us
            </button>
            <button
              onClick={() => setActiveTab("developers")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "developers"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <Users className="w-4 h-4" />
              Developers
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {profileName.charAt(0)}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg mx-auto transition-colors">
                  <Camera className="w-4 h-4" />
                  Change Photo
                </button>
              </div>

              {/* Edit Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all"
              >
                Save Profile
              </button>

              {/* Change Password */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-gray-700" />
                  <h3 className="text-lg font-bold text-gray-800">Change Password</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  <button
                    onClick={handleChangePassword}
                    disabled={!currentPassword || !newPassword}
                    className="w-full px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              {/* OTP Verification */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-600 mb-4">Enter the 6-digit code from your authenticator app</p>
                
                <div className="flex gap-2 justify-center">
                  {otpCode.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl font-bold bg-white/50 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ))}
                </div>

                <button
                  onClick={() => alert("OTP Verified!")}
                  disabled={otpCode.some(d => !d)}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          )}

          {/* About Us Tab */}
          {activeTab === "about" && (
            <div className="space-y-6">
              {/* ArCuGreen */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <img src={logoImage} alt="ArCuGreen Logo" className="w-16 h-16 object-contain" />
                  <h3 className="text-2xl font-bold text-green-700">ArCuGreen</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  ArCuGreen is an advanced smart agriculture system designed to revolutionize 
                  farming through automation and real-time monitoring. Our platform integrates 
                  cutting-edge sensor technology with intelligent irrigation control, enabling 
                  farmers to optimize crop growth while conserving resources.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/50 text-green-700 text-sm font-semibold rounded-full">
                    IoT Sensors
                  </span>
                  <span className="px-3 py-1 bg-white/50 text-green-700 text-sm font-semibold rounded-full">
                    Automation
                  </span>
                  <span className="px-3 py-1 bg-white/50 text-green-700 text-sm font-semibold rounded-full">
                    Real-time Monitoring
                  </span>
                  <span className="px-3 py-1 bg-white/50 text-green-700 text-sm font-semibold rounded-full">
                    Smart Irrigation
                  </span>
                </div>
              </div>

              {/* Sarate Farm */}
              <div className="p-6 bg-white/50 rounded-xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sarate Farm</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sarate Farm is a pioneering agricultural facility that embraces modern 
                  technology to achieve sustainable and efficient farming practices. Located 
                  in a region perfect for diverse crop cultivation, our farm serves as a 
                  model for integrating traditional farming wisdom with innovative smart 
                  agriculture solutions.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-800 mb-1">Multi-Sensor Integration</h4>
                  <p className="text-sm text-blue-700">
                    Monitor soil moisture, pH, temperature, humidity, and EC levels
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-bold text-green-800 mb-1">Smart Automation</h4>
                  <p className="text-sm text-green-700">
                    Automatic irrigation based on real-time sensor data
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-bold text-purple-800 mb-1">Cultivation Planning</h4>
                  <p className="text-sm text-purple-700">
                    Plan and track crop growth with harvest predictions
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-xl">
                  <h4 className="font-bold text-amber-800 mb-1">User Management</h4>
                  <p className="text-sm text-amber-700">
                    Multi-user access with role-based permissions
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Developers Tab */}
          {activeTab === "developers" && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Meet the Team</h3>
                <p className="text-gray-600">
                  The talented individuals behind ArCuGreen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {developers.map((dev) => (
                  <div
                    key={dev.name}
                    className="p-6 bg-white/50 rounded-xl border border-gray-200 hover:border-green-300 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {dev.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 text-lg">{dev.name}</h4>
                        <p className="text-sm font-semibold text-green-600 mb-2">
                          {dev.role}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {dev.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}