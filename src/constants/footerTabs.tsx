import LinkedInIcon from "../components/icons/LinkedInIcon.tsx";
import GithubIcon from "../components/icons/GitHubIcon.tsx";
import {ReactNode} from "react";

interface IFooterTabs {
    link: string;
    icon: ReactNode;
    text?: string;
}


const FOOTER_TABS: IFooterTabs[] = [
    {
        link: "https://www.linkedin.com/in/christiantriadataro/",
        icon: <LinkedInIcon className="fill-[#607B96] w-[24px] h-[24px]"/>,
    },
    {
        link: "https://www.github.com/christiantriadataro/",
        icon: <GithubIcon className="fill-[#607B96] w-[24px] h-[24px]"/>,
        text: "@christiantriadataro"
    }
]

export default FOOTER_TABS