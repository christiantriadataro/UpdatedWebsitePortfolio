
import MainContentWrapper from "../wrappers/MainContentWrapper.tsx";
import {Outlet} from "react-router";

const MainContent = () => {
    return (
        <MainContentWrapper>
            <Outlet/>
        </MainContentWrapper>
    )
}

export default MainContent;