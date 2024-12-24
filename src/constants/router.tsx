import {ReactElement} from "react";
import Home from "../../views/Home.tsx";
import AboutMe from "../../views/AboutMe.tsx";
import Projects from "../../views/Projects.tsx";
import ContactMe from "../../views/ContactMe.tsx";


export interface IRouterTabs {
    path: string;
    element: ReactElement;
}

// export const ROUTER_TABS: IRouterTabs[] = [
//     {
//         path: "/home",
//         element: <Home/>,
//     },
//     {
//         path: "/about-me",
//         element: <AboutMe/>
//     },
//     {
//         path: "/projects",
//         element: <Projects/>
//     },
//     {
//         path: "/contact-me",
//         element: <ContactMe/>
//     },
// ]

export const ROUTER_MOBILE_TABS: IRouterTabs[] = [
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/about-me",
        element: <AboutMe/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/contact-me",
        element: <ContactMe/>
    },
]

