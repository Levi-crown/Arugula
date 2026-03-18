import { X } from "lucide-react";
import { useState } from "react";

interface SensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  icon: any;
  status: "normal" | "low" | "high";
  min: number;
  max: number;
}

interface SensorDetailModalProps {
  sensor: SensorData;
  onClose: () => void;
  onUpdate: (sensor: SensorData) => void;
}

export function SensorDetailModal({ sensor, onClose, onUpdate }: SensorDetailModalProps) {
  const [min, setMin] = useState(sensor.min);
  const [max, setMax] = useState(sensor.max);

  const handleSave = () => {
    onUpdate({ ...sensor, min, max });
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-modal w-full max-w-md p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{sensor.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Value */}
        <div className="mb-6 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <p className="text-sm text-gray-600 mb-1">Current Value</p>
          <p className="text-4xl font-bold text-green-600">
            {sensor.value} <span className="text-xl">{sensor.unit}</span>
          </p>
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
              value={min}
              onChange={(e) => setMin(parseFloat(e.target.value))}
              className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              step="0.1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Value
            </label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(parseFloat(e.target.value))}
              className="w-full px-4 py-2 bg-white/50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              step="0.1"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
