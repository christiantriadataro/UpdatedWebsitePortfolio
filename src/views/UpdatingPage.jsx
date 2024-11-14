import { TypeAnimation } from 'react-type-animation';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SnakeGame from "../components/Index/SnakeGame.jsx";
import Blur from "../components/Index/Blur.jsx";

const Index = () => {
    return (
        <>
            <div className=" bg-[#011627] w-[1243px] h-[562px] rounded-md flex flex-col justify-between border border-[#1E2D3D]">
                <Header />
                <div className="h-full flex items-center justify-evenly">
                    <div className="flex flex-col gap-11 justify-around">
                        <TypeAnimation
                                sequence={[
                                    'Updating Soon...',
                                    1000,
                                ]}
                                speed={50}
                                className="text-[#4D5BCE] text-6xl"
                                repeat={Infinity}
                            />
                    </div>

                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Index