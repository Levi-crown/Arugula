import { useState } from "react";
import { Droplets, Calendar, Hand } from "lucide-react";
import { Switch } from "../components/ui/switch";

export function IrrigationPage() {
  const [mode, setMode] = useState<"automatic" | "schedule" | "manual">("automatic");
  const [isIrrigating, setIsIrrigating] = useState(false);
  const [autoEnabled, setAutoEnabled] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Irrigation Control</h1>
        <p className="text-gray-600 mt-1">Manage your irrigation system settings</p>
      </div>

      {/* Mode Selection */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Control Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setMode("automatic")}
            className={`p-6 rounded-xl border-2 transition-all ${
              mode === "automatic"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white/50 hover:border-green-300"
            }`}
          >
            <Droplets className={`w-8 h-8 mb-2 ${mode === "automatic" ? "text-green-600" : "text-gray-400"}`} />
            <h3 className="font-bold text-gray-800">Automatic</h3>
            <p className="text-sm text-gray-600 mt-1">Based on soil moisture</p>
          </button>

          <button
            onClick={() => setMode("schedule")}
            className={`p-6 rounded-xl border-2 transition-all ${
              mode === "schedule"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white/50 hover:border-green-300"
            }`}
          >
            <Calendar className={`w-8 h-8 mb-2 ${mode === "schedule" ? "text-green-600" : "text-gray-400"}`} />
            <h3 className="font-bold text-gray-800">Schedule</h3>
            <p className="text-sm text-gray-600 mt-1">Time-based irrigation</p>
          </button>

          <button
            onClick={() => setMode("manual")}
            className={`p-6 rounded-xl border-2 transition-all ${
              mode === "manual"
                ? "border-green-500 bg-green-50"
                : "border-gray-200 bg-white/50 hover:border-green-300"
            }`}
          >
            <Hand className={`w-8 h-8 mb-2 ${mode === "manual" ? "text-green-600" : "text-gray-400"}`} />
            <h3 className="font-bold text-gray-800">Manual</h3>
            <p className="text-sm text-gray-600 mt-1">Manual control</p>
          </button>
        </div>
      </div>

      {/* Automatic Mode Settings */}
      {mode === "automatic" && (
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Automatic Settings</h2>
              <p className="text-sm text-gray-600">Irrigation triggers based on sensor readings</p>
            </div>
            <Switch checked={autoEnabled} onCheckedChange={setAutoEnabled} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Soil Moisture (%)
              </label>
              <input
                type="number"
                defaultValue={30}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Start irrigation when below this level</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Soil Moisture (%)
              </label>
              <input
                type="number"
                defaultValue={70}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Stop irrigation when above this level</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Irrigation Duration (minutes)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cooldown Period (hours)
              </label>
              <input
                type="number"
                defaultValue={2}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-xs text-gray-500 mt-1">Minimum time between irrigation cycles</p>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Mode Settings */}
      {mode === "schedule" && (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule Settings</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  defaultValue="06:00"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  defaultValue={30}
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <select className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Daily</option>
                  <option>Every 2 days</option>
                  <option>Every 3 days</option>
                  <option>Weekly</option>
                </select>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Next irrigation:</strong> Tomorrow at 6:00 AM for 30 minutes
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Manual Mode Settings */}
      {mode === "manual" && (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Manual Control</h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center">
              <p className="text-sm text-gray-600 mb-2">Current Status</p>
              <p className="text-3xl font-bold text-blue-600">
                {isIrrigating ? "Irrigating..." : "Idle"}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (minutes)
              </label>
              <input
                type="number"
                defaultValue={15}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              onClick={() => setIsIrrigating(!isIrrigating)}
              className={`w-full px-6 py-4 font-bold rounded-xl shadow-lg transition-all ${
                isIrrigating
                  ? "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/30"
                  : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/30"
              }`}
            >
              {isIrrigating ? "Stop Irrigation" : "Start Irrigation"}
            </button>
          </div>
        </div>
      )}

      {/* Status Overview */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">System Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/50 rounded-xl">
            <p className="text-sm text-gray-600">Current Soil Moisture</p>
            <p className="text-2xl font-bold text-gray-800">45%</p>
          </div>
          <div className="p-4 bg-white/50 rounded-xl">
            <p className="text-sm text-gray-600">Water Tank Level</p>
            <p className="text-2xl font-bold text-gray-800">75%</p>
          </div>
          <div className="p-4 bg-white/50 rounded-xl">
            <p className="text-sm text-gray-600">Today's Water Usage</p>
            <p className="text-2xl font-bold text-gray-800">45L</p>
          </div>
        </div>
      </div>
    </div>
  );
}
