import { useState } from "react";
import { Droplet, Thermometer, Wind, Activity, Zap } from "lucide-react";
import { Switch } from "../components/ui/switch";

export function SensorsPage() {
  const [soilMode, setSoilMode] = useState<"automatic" | "schedule" | "manual">("automatic");
  const [ecMode, setEcMode] = useState<"automatic" | "schedule" | "manual">("automatic");
  const [fanEnabled, setFanEnabled] = useState(false);
  const [tempThreshold, setTempThreshold] = useState(30);
  const [humidityThreshold, setHumidityThreshold] = useState(70);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Sensor Management</h1>

      {/* Soil Moisture Control */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white">
            <Droplet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Soil Moisture</h2>
            <p className="text-sm text-gray-600">Current: 45%</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Irrigation Control Mode
            </label>
            <select
              value={soilMode}
              onChange={(e) => setSoilMode(e.target.value as any)}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="automatic">Automatic</option>
              <option value="schedule">Schedule</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {soilMode === "automatic" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min Threshold (%)
                </label>
                <input
                  type="number"
                  defaultValue={30}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Threshold (%)
                </label>
                <input
                  type="number"
                  defaultValue={70}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          )}

          {soilMode === "schedule" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time
                </label>
                <input
                  type="time"
                  defaultValue="06:00"
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  defaultValue={30}
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          )}

          {soilMode === "manual" && (
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 transition-all">
              Start Irrigation
            </button>
          )}
        </div>
      </div>

      {/* EC Level Control */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl text-white">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">EC Level</h2>
            <p className="text-sm text-gray-600">Current: 1.8 mS/cm</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fertilizer Control Mode
            </label>
            <select
              value={ecMode}
              onChange={(e) => setEcMode(e.target.value as any)}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="automatic">Automatic</option>
              <option value="schedule">Schedule</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {ecMode === "automatic" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Min EC (mS/cm)
                </label>
                <input
                  type="number"
                  defaultValue={1.0}
                  step="0.1"
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max EC (mS/cm)
                </label>
                <input
                  type="number"
                  defaultValue={2.5}
                  step="0.1"
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Temperature & Humidity Control */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Temperature */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl text-white">
              <Thermometer className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Temperature</h2>
              <p className="text-sm text-gray-600">Current: 28°C</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fan Trigger Threshold (°C)
              </label>
              <input
                type="number"
                value={tempThreshold}
                onChange={(e) => setTempThreshold(parseInt(e.target.value))}
                className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
              <div>
                <p className="font-medium text-gray-800">Fan Control</p>
                <p className="text-sm text-gray-600">
                  {fanEnabled ? "Fan is ON" : "Fan is OFF"}
                </p>
              </div>
              <Switch
                checked={fanEnabled}
                onCheckedChange={setFanEnabled}
              />
            </div>
          </div>
        </div>

        {/* Humidity */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl text-white">
              <Wind className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Humidity</h2>
              <p className="text-sm text-gray-600">Current: 65%</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Optimal Range (%)
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  defaultValue={40}
                  placeholder="Min"
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="number"
                  defaultValue={80}
                  placeholder="Max"
                  className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pH Level */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl text-white">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">pH Level</h2>
            <p className="text-sm text-gray-600">Current: 6.5 pH</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min pH
            </label>
            <input
              type="number"
              defaultValue={6.0}
              step="0.1"
              className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max pH
            </label>
            <input
              type="number"
              defaultValue={7.5}
              step="0.1"
              className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
