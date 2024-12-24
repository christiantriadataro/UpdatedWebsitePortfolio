import { Outlet } from "@tanstack/react-router";
import MenuIcon from "../../assets/icons/Menu.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";
import { ROUTES_TABS } from "../../main.tsx";
import { useState } from "react";
import LinkedInIcon from "../icons/LinkedInIcon.tsx";
import GithubIcon from "../icons/GitHubIcon.tsx";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="h-full w-full border border-lines rounded-lg text-white flex flex-col">
      {/* header */}
      <div className="py-4 border-b border-lines flex items-center justify-between px-3">
        <div className="text-code-snippet-lg">christian-tria-dataro</div>
        <img
          onClick={handleClick}
          src={isMenuOpen ? MenuIcon : CloseIcon}
          alt=""
          className="w-4 h-4"
        />
      </div>
      <div className={isMenuOpen ? "hidden" : ""}>
        {ROUTES_TABS.map((tab) => (
          <div key={tab.name} className="py-4 px-4 border-b border-lines">
            {tab.name}
          </div>
        ))}
      </div>
      <div className="h-full">
        <Outlet />
      </div>
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
    </div>
  );
};

export default MainLayout;
