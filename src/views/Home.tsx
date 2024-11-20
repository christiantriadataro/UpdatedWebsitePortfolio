import SnakeGame from "../components/home/SnakeGame.tsx";
import BlurBlueImage from "../blur/Blue.svg"
import BlurGreenImage from "../blur/Green.svg"
import Blur from "../components/home/Blur.tsx";
import HomeComponent from "../components/home/HomeComponent.tsx";
import {ReactNode} from "react";


const HomeContentWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="home-content-wrapper"> {children}</div>
    )
}

const Home = () => {
    return (
        <HomeContentWrapper>
            <HomeComponent/>
            <Blur src={BlurBlueImage} className="z-10 absolute right-0 bottom-0"/>
            <Blur src={BlurGreenImage} className="z-10 absolute left-1/3 top-0"/>
            <SnakeGame/>
        </HomeContentWrapper>
    )
}

export default Home