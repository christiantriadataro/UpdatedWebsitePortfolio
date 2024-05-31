import { TypeAnimation } from 'react-type-animation';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import SnakeGame from "../components/Index/SnakeGame.jsx";
import Blur from "../components/Index/Blur.jsx";
import {useState} from "react";

const Index = () => {
    const [isHeaderClicked, setIsHeaderClicked] = useState(false);
    return (
        <>
            <div
                className="bg-[#011627] w-full h-full mx-auto rounded-md flex flex-col justify-between border border-[#1E2D3D]">
                <Header isHeaderClicked={isHeaderClicked} setIsHeaderClicked={setIsHeaderClicked}/>
                <div
                    className={`${isHeaderClicked ? "hidden" : ""} h-full flex items-center lg:justify-evenly`}>
                    <div className="z-10 flex flex-col gap-11 pl-4 justify-around">
                        <div className="flex flex-col justify-start items-start gap-4 ">
                            <p className="text-[#E5E9F0] text-lg animate-bounce">Hi all. I am</p>
                            <p className="text-[#E5E9F0] text-5xl lg:text-6xl">Christian Dataro</p>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    '> Front-End Developer',
                                    1000,
                                    '> Full-Stack Developer',
                                    1000,
                                    '> Software Engineer',
                                    1000,
                                ]}
                                speed={50}
                                className="text-[#43D9AD] lg:text-[#4D5BCE] text-[20px] lg:text-4xl"
                                repeat={Infinity}
                            />
                            {/*<p className="text-[#4D5BCE] text-4xl">{`>`} Full-Stack Developer </p>*/}
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className="hidden lg:block text-[#607B96] text-[12px]">// complete the game to continue</p>
                            <p className="hidden lg:block text-[#607B96] text-[12px]">// you can also see it in my Github page</p>
                            <p className="lg:hidden text-[#607B96] text-[12px]">// find my profile on Github:</p>
                            <p className="text-[#607B96] text-[12px] font-[500]">
                                <span className="text-[#4D5BCE]">const </span>
                                <span className="text-[#43D9AD]">githubLink </span>
                                =
                                <span className="text-[#E99287]"> "https://github.com/christiantriadataro/"</span>
                            </p>
                        </div>
                    </div>
                    <div className="absolute  bottom-1/4 right-[5%] rotate-12  rounded-bl-full rounded-br-full w-[300px] h-[300px] blur-[70px] opacity-50  bg-[radial-gradient(circle_at_50%_50%,rgba(77,91,206,1),rgba(76,0,255,0)_100%)]"></div>
                    <div className="absolute top-[20%] right-[30%] rotate-12  rounded-bl-full rounded-br-full w-[300px] h-[300px] blur-[70px] opacity-50  bg-[radial-gradient(circle_at_50%_50%,rgba(67,217,173,1),rgba(76,0,255,0)_100%)]"></div>
                    <SnakeGame />
                </div>
                <Footer isHeaderClicked={isHeaderClicked}/>
            </div>
        </>
    )
}

export default Index