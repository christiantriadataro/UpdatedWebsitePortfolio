import { createBrowserRouter} from "react-router-dom";
import Index from "../views/Index.jsx";
import AboutMe from "../views/AboutMe.jsx";
import Projects from "../views/Projects.jsx";
import ContactMe from "../views/ContactMe.jsx";
import UpdatingPage from "../views/UpdatingPage.jsx";
import IndexMobile from "../views/IndexMobile.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <IndexMobile/>
    },
    {
        path: "/about-me",
        element: <AboutMe />
    },
    {
        path: "/projects",
        element: <Projects />
    },
    {
        path: "/contact-me",
        element: <ContactMe />
    },
     {
        path: "/not-found",
        element: <UpdatingPage />
    },
])

