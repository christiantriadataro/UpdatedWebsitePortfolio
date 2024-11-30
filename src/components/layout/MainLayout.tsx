import HeaderProvider from "../../contexts/HeaderProvider.tsx";
import Header from "../header/Header.tsx";
import Footer from "../footer/Footer.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        // <MainLayoutWrapper>
        <div className="bg-primary-blue w-full h-full rounded-md flex flex-col border border-lines">
            <HeaderProvider>
                <Header/>
                {/*<MainContent/>*/}
                <div className="h-full w-full">
                    <Outlet/>
                </div>
                <Footer/>
            </HeaderProvider>
        </div>
    )
}

export default MainLayout;