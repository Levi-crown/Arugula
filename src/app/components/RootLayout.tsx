import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Activity, 
  Droplets, 
  Sprout, 
  Users, 
  Settings, 
  LogOut,
  User
} from "lucide-react";
import { useState } from "react";
import { SettingsModal } from "./SettingsModal";
import logoImage from "../../assets/b38d497ad9b9c16cc0169383c1e4996cdcf70870.png";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/sensors", label: "Sensors", icon: Activity },
  { to: "/irrigation", label: "Irrigation", icon: Droplets },
  { to: "/cultivation", label: "Cultivation", icon: Sprout },
  { to: "/manage-account", label: "Manage Account", icon: Users },
];

export function RootLayout() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, this would clear auth tokens
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-[#f0fdf4] leaf-background overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 p-4 flex flex-col gap-4 bg-gradient-to-b from-[#14532d] to-[#166534]">
        {/* Logo */}
        <div className="glass-card p-4 mb-2 bg-white/10 border-white/20">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="ArCuGreen Logo" className="w-10 h-10 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-white">ArCuGreen</h1>
              <p className="text-xs text-green-100">Smart Agriculture</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#22c55e] text-white shadow-lg shadow-green-500/50 scale-105"
                          : "text-green-100 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Bottom actions */}
          <div className="mt-6 pt-4 border-t border-white/20 space-y-2">
            <button
              onClick={() => setSettingsOpen(true)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-green-100 hover:bg-white/10 hover:text-white"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Settings</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full text-red-300 hover:bg-red-500/20 hover:text-red-100"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="glass-card m-4 p-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Welcome to ArCuGreen</h2>
            <p className="text-sm text-gray-600">Monitor and control your smart farm</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">John Farmer</p>
              <p className="text-xs text-gray-600">Administrator</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <Outlet />
        </div>
      </main>

      {/* Settings Modal */}
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}