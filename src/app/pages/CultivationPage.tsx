import { useState } from "react";
import { Calendar, Sprout, Clock } from "lucide-react";

export function CultivationPage() {
  const [plantingDate, setPlantingDate] = useState("");
  const [cropType, setCropType] = useState("tomato");
  const [harvestDate, setHarvestDate] = useState("");
  const [daysToHarvest, setDaysToHarvest] = useState(0);

  const cropGrowthPeriods: Record<string, number> = {
    tomato: 80,
    lettuce: 45,
    cucumber: 60,
    pepper: 90,
    strawberry: 120,
    cabbage: 70,
  };

  const calculateHarvest = () => {
    if (!plantingDate) return;

    const growthDays = cropGrowthPeriods[cropType];
    const planting = new Date(plantingDate);
    const harvest = new Date(planting);
    harvest.setDate(planting.getDate() + growthDays);

    setHarvestDate(harvest.toISOString().split("T")[0]);
    setDaysToHarvest(growthDays);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Cultivation Planning</h1>
        <p className="text-gray-600 mt-1">Plan and track your crop cultivation</p>
      </div>

      {/* Set Cultivation */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl text-white">
            <Sprout className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Set New Cultivation</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Crop Type
            </label>
            <select
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="tomato">Tomato (80 days)</option>
              <option value="lettuce">Lettuce (45 days)</option>
              <option value="cucumber">Cucumber (60 days)</option>
              <option value="pepper">Pepper (90 days)</option>
              <option value="strawberry">Strawberry (120 days)</option>
              <option value="cabbage">Cabbage (70 days)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Planting Date
            </label>
            <input
              type="date"
              value={plantingDate}
              onChange={(e) => setPlantingDate(e.target.value)}
              className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <button
          onClick={calculateHarvest}
          disabled={!plantingDate}
          className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-xl shadow-lg shadow-green-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Harvest Date
        </button>
      </div>

      {/* Results */}
      {harvestDate && (
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Cultivation Timeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <p className="text-sm font-medium text-gray-700">Planting Date</p>
              </div>
              <p className="text-xl font-bold text-blue-600">{formatDate(plantingDate)}</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-600" />
                <p className="text-sm font-medium text-gray-700">Growth Period</p>
              </div>
              <p className="text-xl font-bold text-green-600">{daysToHarvest} days</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sprout className="w-5 h-5 text-amber-600" />
                <p className="text-sm font-medium text-gray-700">Estimated Harvest</p>
              </div>
              <p className="text-xl font-bold text-amber-600">{formatDate(harvestDate)}</p>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-8">
            <div className="relative">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full w-0 animate-[grow_1s_ease-out_forwards]" />
              </div>
              <div className="flex justify-between mt-3">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Start</p>
                </div>
                <div className="text-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Harvest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Cultivations */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Cultivations</h2>
        
        <div className="space-y-4">
          <div className="p-4 bg-white/50 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-red-400 to-red-600 rounded-xl text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Tomato</h3>
                <p className="text-sm text-gray-600">Planted: March 1, 2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">65 days remaining</p>
              <p className="text-sm text-gray-600">Harvest: May 20, 2026</p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Lettuce</h3>
                <p className="text-sm text-gray-600">Planted: February 15, 2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-amber-600">15 days remaining</p>
              <p className="text-sm text-gray-600">Harvest: April 1, 2026</p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Cucumber</h3>
                <p className="text-sm text-gray-600">Planted: February 20, 2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">35 days remaining</p>
              <p className="text-sm text-gray-600">Harvest: April 21, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
