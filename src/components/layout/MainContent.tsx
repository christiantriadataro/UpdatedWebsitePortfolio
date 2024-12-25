import MainContentWrapper from "../wrappers/MainContentWrapper.tsx";
import { Outlet } from "@tanstack/react-router";

const MainContent = () => {
  return (
    <MainContentWrapper>
      <Outlet />
    </MainContentWrapper>
  );
};

export default MainContent;
