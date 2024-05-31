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
                        <div className="flex flex-col justify-start items-start gap-4">
                            <p className="text-[#E5E9F0] text-lg animate-bounce">Hi all. I am</p>
                            <p className="text-[#E5E9F0] text-6xl">Christian Dataro</p>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed once, initially
                                    '> UI/UX Designer',
                                    1000,
                                    '> Front-End Developer',
                                    1000,
                                    '> Full-Stack Developer',
                                    1000,
                                    '> Software Engineer',
                                    1000,
                                ]}
                                speed={50}
                                className="text-[#4D5BCE] text-4xl"
                                repeat={Infinity}
                            />
                            {/*<p className="text-[#4D5BCE] text-4xl">{`>`} Full-Stack Developer </p>*/}
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <p className="text-[#607B96] text-[12px]">// complete the game to continue</p>
                            <p className="text-[#607B96] text-[12px]">// you can also see it in my Github page</p>
                            <p className="text-[#607B96] text-[12px] font-[500]">
                                <span className="text-[#4D5BCE]">const </span>
                                <span className="text-[#43D9AD]">githubLink </span>
                                =
                                <span className="text-[#E99287]"> "https://github.com/christiantriadataro/"</span>
                            </p>
                        </div>
                    </div>
                    <Blur className="absolute w-[709px] h-[514px] left-[590px]"  />
                    <SnakeGame />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Index