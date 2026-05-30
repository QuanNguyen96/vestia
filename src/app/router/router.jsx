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

const basename = import.meta.env?.BASE_URL.replace(/\/$/, "") || ''
const router = createBrowserRouter(
  [
    {
      id: "root",
      Component: Root,
      hydrateFallbackElement: <SplashScreen />,
      ErrorBoundary: RootErrorBoundary,
      children: [ghostRoutes, publicRoutes, customRoutes],
    },
  ],
  {
    basename: basename,
  }
);

export default router;
