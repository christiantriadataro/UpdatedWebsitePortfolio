import { Link, Outlet } from "@tanstack/react-router";
import MenuIcon from "../../assets/icons/Menu.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import { ROUTES_TABS } from "../../main.tsx";
import { useState } from "react";
import LinkedInIcon from "../icons/LinkedInIcon.tsx";
import GithubIcon from "../icons/GitHubIcon.tsx";

const Footer = () => {
  return (
    <div className="border-t border-lines flex justify-between items-center">
      <div className="pl-3">find me in</div>
      <div className="flex flex-row h-[40px]">
        <div className="h-full border-l border-lines flex items-center px-2">
          <LinkedInIcon className="fill-secondary-blue w-6 h-6" />
        </div>
        <div className="h-full border-l border-lines flex items-center px-2">
          <GithubIcon className="fill-secondary-blue w-[24px] h-[24px]" />
        </div>
      </div>
    </div>
  );
};

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-primary-blue h-full w-full border border-lines rounded-lg text-white flex flex-col">
      {/* header */}
      <div className="py-4 border-b border-lines flex items-center justify-between px-3">
        <div className="text-code-snippet-lg">christian-tria-dataro</div>
        <img
          onClick={handleClick}
          src={isMenuOpen ? CloseIcon : MenuIcon}
          alt=""
          className="w-4 h-4"
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
