import { createHashRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { SensorsPage } from "./pages/SensorsPage";
import { IrrigationPage } from "./pages/IrrigationPage";
import { CultivationPage } from "./pages/CultivationPage";
import { ManageAccountPage } from "./pages/ManageAccountPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { index: true, element: <DashboardPage /> }, 
      { path: "sensors", element: <SensorsPage /> },
      { path: "irrigation", element: <IrrigationPage /> },
      { path: "cultivation", element: <CultivationPage /> },
      { path: "manage-account", element: <ManageAccountPage /> },
    ],
  },
]);