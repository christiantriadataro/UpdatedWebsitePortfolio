import HeaderProvider from "../../contexts/HeaderProvider.tsx";
import MainLayoutWrapper from "../wrappers/MainLayoutWrapper.tsx";
import Header from "../header/Header.tsx";
import MainContent from "./MainContent.tsx";
import Footer from "../footer/Footer.tsx";

const MainLayout = () => {

    return (
        <MainLayoutWrapper>
            <HeaderProvider>
                <Header/>
                <MainContent/>
                <Footer/>
            </HeaderProvider>
        </MainLayoutWrapper>
    )
}

export default MainLayout;