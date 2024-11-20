import {Outlet} from "react-router-dom";
import MainContentWrapper from "../wrappers/MainContentWrapper.tsx";

const MainContent = () => {
    return (
        <MainContentWrapper>
            <Outlet/>
        </MainContentWrapper>
    )
}

export default MainContent;