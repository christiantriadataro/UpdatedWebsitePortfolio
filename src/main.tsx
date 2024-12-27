import { StrictMode } from "react";
import "./index.css";
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import MainLayout from "./components/layout/MainLayout.tsx";
import Home from "./views/Home.tsx";
import AboutMe from "./views/AboutMe.tsx";
import Projects from "./views/Projects.tsx";
import ContactMe from "./views/ContactMe.tsx";
import { createRoot } from "react-dom/client";

const rootRoute = createRootRoute({
  component: MainLayout,
});

interface IRouteTabsProps {
  name: string;
  path: string;
  component: () => JSX.Element;
}

export const ROUTES_TABS: IRouteTabsProps[] = [
  {
    name: "_hello",
    path: "/",
    component: Home,
  },
  {
    name: "_about-me",
    path: "/about-me",
    component: AboutMe,
  },
  {
    name: "_projects",
    path: "/projects",
    component: Projects,
  },
  {
    name: "_contact-me",
    path: "/contact-me",
    component: ContactMe,
  },
];

const ROUTES = ROUTES_TABS.map((tab) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: tab.path,
    component: tab.component,
  }),
);

const routeTree = rootRoute.addChildren(ROUTES);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
