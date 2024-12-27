import { Link, Outlet } from "@tanstack/react-router";
import MenuIcon from "/assets/icons/Menu.svg";
import CloseIcon from "/assets/icons/close-icon.svg";
import { ROUTES_TABS } from "../../main.tsx";
import { useState } from "react";
import LinkedInIcon from "../icons/LinkedInIcon.tsx";
import GithubIcon from "../icons/GitHubIcon.tsx";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../constants/env.ts";

const FOOTER_LINKS = [
  {
    id: 1,
    path: LINKEDIN_LINK,
    component: <LinkedInIcon className="fill-secondary-blue w-6 h-6" />,
  },
  {
    id: 2,
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
            key={tab.id}
            to={tab.path}
            className="h-full border-l border-lines flex items-center px-[2.3px]"
          >
            {tab.component}
          </Link>
        ))}
      </div>
    </div>
  );
};

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative bg-primary-blue h-full w-full border border-lines rounded-lg text-white flex flex-col">
      {/* header */}
      <div className="w-full border-b border-lines flex lg:flex-row flex-col">
        <div className="flex lg:w-full items-center justify-between px-4 max-sm:border-b max-sm:border-lines">
          <div className="py-4 flex items-center text-code-snippet-lg text-secondary-blue w-full">
            christian-tria-dataro
          </div>
          <img
            onClick={handleClick}
            src={isMenuOpen ? CloseIcon : MenuIcon}
            alt=""
            className="lg:hidden w-4 h-4 cursor-pointer"
          />
        </div>
        <div
          className={`flex flex-col lg:flex-row w-full ${isMenuOpen ? "" : "max-sm:hidden"}`}
        >
          {ROUTES_TABS.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              onClick={handleClick}
              activeProps={{
                className:
                  "lg:border-b lg:border-accent-orange max-sm:text-accent-orange text-secondary-white",
              }}
              className="lg:text-secondary-blue hover:bg-gray-600 hover:text-accent-orange [&.active]:text-secondary-white  lg:flex lg:items-center lg:justify-center py-4 max-sm:px-4 lg:w-full "
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen ? (
        <div className="h-full"></div>
      ) : (
        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
