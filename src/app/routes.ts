import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { SensorsPage } from "./pages/SensorsPage";
import { IrrigationPage } from "./pages/IrrigationPage";
import { CultivationPage } from "./pages/CultivationPage";
import { ManageAccountPage } from "./pages/ManageAccountPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "sensors", Component: SensorsPage },
      { path: "irrigation", Component: IrrigationPage },
      { path: "cultivation", Component: CultivationPage },
      { path: "manage-account", Component: ManageAccountPage },
    ],
  },
]);
