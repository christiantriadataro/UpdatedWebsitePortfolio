import { Link, Outlet } from "@tanstack/react-router";
import MenuIcon from "../../assets/icons/Menu.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import { ROUTES_TABS } from "../../main.tsx";
import { useState } from "react";
import LinkedInIcon from "../icons/LinkedInIcon.tsx";
import GithubIcon from "../icons/GitHubIcon.tsx";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../constants/env.ts";

const FOOTER_LINKS = [
  {
    path: LINKEDIN_LINK,
    component: <LinkedInIcon className="fill-secondary-blue w-6 h-6" />,
  },
  {
    path: GITHUB_LINK,
    component: <GithubIcon className="fill-secondary-blue w-[24px] h-[24px]" />,
  },
];

const Footer = () => {
  return (
    <div className="border-t border-lines flex justify-between items-center">
      <div className="pl-3 text-code-snippet-lg text-secondary-blue">
        find me in
      </div>
      <div className="flex flex-row h-[40px]">
        {FOOTER_LINKS.map((tab) => (
          <Link
            to={tab.path}
            className="h-full border-l border-lines flex items-center px-2"
          >
            {tab.component}
          </Link>
        ))}
      </div>
    </div>
  );
};

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative bg-primary-blue h-full w-full border border-lines rounded-lg text-white flex flex-col">
      {/* header */}
      <div className="py-4 border-b border-lines flex items-center justify-between px-3">
        <div className="text-code-snippet-lg text-secondary-blue">
          christian-tria-dataro
        </div>
        <img
          onClick={handleClick}
          src={isMenuOpen ? CloseIcon : MenuIcon}
          alt=""
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      <div className={`flex flex-col ${isMenuOpen ? "" : "hidden"}`}>
        {ROUTES_TABS.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            onClick={handleClick}
            className="hover:bg-gray-600 hover:text-accent-orange py-4 px-4 border-b border-lines [&.active]:text-accent-orange"
          >
            {tab.name}
          </Link>
        ))}
      </div>
      {isMenuOpen ? (
        <div className="h-full"></div>
      ) : (
        <div className="h-full">
          <Outlet />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default MainLayout;
