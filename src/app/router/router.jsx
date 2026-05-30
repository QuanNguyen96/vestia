// Import Dependencies
import { createBrowserRouter } from "react-router";

// Local Imports
import Root from "app/layouts/Root";
import RootErrorBoundary from "app/pages/errors/RootErrorBoundary";
// import { protectedRoutes } from "./protected";
import { SplashScreen } from "components/template/SplashScreen";
import { ghostRoutes } from "./ghost";
import { customRoutes } from "./custom";
import { publicRoutes } from "./public";

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    id: "root",
    Component: Root,
    hydrateFallbackElement: <SplashScreen />,
    ErrorBoundary: RootErrorBoundary,
    // children: [protectedRoutes, ghostRoutes, publicRoutes, customRoutes],
    children: [ghostRoutes, publicRoutes, customRoutes],

  },
]);

export default router;
