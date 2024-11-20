import SnakesFood from "./SnakeFood.tsx";
import Bolt from "./Bolt.tsx";
import DownArrow from "./DownArrow.tsx";
import UpArrow from "./UpArrow.tsx";
import RightArrow from "./RightArrow.tsx";
import LeftArrow from "./LeftArrow.tsx";


const SnakeGame = () => {
    return (
        <div className="z-20 hidden w-[361px] h-[363px] rounded-lg
        border-[#0C1616] lg:flex flex-col justify-around
        backdrop-blur-[32px] bg-gradient-to-l from-[#175553] from-[1.7%] to-[#43d8d921] to-[81.82%]
        shadow-[inset_0_2px_0_rgba(255,255,255,0.3)]">
            <div className="flex justify-between mt-[9px] ml-[9px] mr-[5px]">
                <Bolt/>
                <Bolt/>
            </div>
            <div className="h-full flex flex-row justify-center items-center gap-[18px]">
                <div
                    className="bg-[#011627]/[.84] w-[168px] h-[310px] rounded-lg shadow-[inset_1px_5px_11px_rgba(2,18,27,0.71)]">
                    <div className="h-full w-full">
                        <SnakesFood className="mt-[35px] ml-[50px] animate-pulse"/>
                    </div>
                    <div className="absolute left-[19%] bottom-[18%]">
                        <button
                            className="bg-[#FEA55F] rounded-lg text-[10px] w-[78px] h-[29px] border-2 border-gray-900 text-black">start-game
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center h-full">
                    <div className="flex flex-col justify-center gap-4">
                        <div className="w-32 h-[108px] bg-[#01142330] rounded-lg
                                        flex flex-col justify-aroun items-center pt-2">
                            <div>
                                <p className="text-[10px] text-[#E5E9F0] shadow-none">// use
                                    keyboard</p>
                                <p className="text-[10px] text-[#E5E9F0] shadow-none">// arrows to
                                    play</p>
                            </div>
                            {/* arrows */}
                            <div className="w-[110px] h-[56px] flex flex-col justify-center items-center gap-1 pt-2">
                                <UpArrow/>
                                <div className="flex justify-center items-center gap-1">
                                    <LeftArrow/>
                                    <DownArrow/>
                                    <RightArrow/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[95px] h-[60px]">
                            <p className="text-[10px] text-[#E5E9F0] shadow-none mb-2">// food
                                left</p>
                            <div className="flex flex-col justify-center items-center gap-[6px]">
                                <div className="flex justify-center items-center gap-[5px]">
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                </div>
                                <div className="flex justify-center items-center flex-row gap-[5px]">
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                    <SnakesFood/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="border border-[#E5E9F0] w-[79px] h-[29px] rounded-lg text-[10px] text-[#E5E9F0]">skip
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-[9px] ml-[9px] mr-[5px]">
                <Bolt/>
                <Bolt/>
            </div>
        </div>

    )
}

export default SnakeGame