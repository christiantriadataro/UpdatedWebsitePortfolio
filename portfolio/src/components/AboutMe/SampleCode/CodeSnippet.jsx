import CloseIcon from "../SideDescription/CloseIcon.jsx";
import GistCard from "./GistCard.jsx";
import ScrollbarToggler from "../SideDescription/ScrollbarToggler.jsx";

const CodeSnippet = () => {
    return (
        <div className="h-full overflow-y-auto">
            <div
                className="w-[173px] h-[34px] border-x border-[#1E2D3D] flex flex-row pl-4 justify-between pr-2 items-center">
                <div className="text-[12px] text-[#607B96]">code-snippet.jsx</div>
                <CloseIcon/>
            </div>
            <div className="w-full border-t border-l border-[#1E2D3D] flex flex-row">
                <div className="w-full h-full border-r border-[#1E2D3D]
                                pt-[15px] px-4 text-[#607B96] text-[13px]">
                    <div className="">// Code Snippet Showcase</div>
                    <div className=" lg:h-full no-scrollbar overflow-y-auto flex flex-col gap-8 py-5 lg:pb-32">
                        <GistCard/>
                        <GistCard/>
                        <GistCard/>
                        <GistCard/>
                        <GistCard/>
                    </div>
                </div>
                <div className="w-[20px] h-full pt-1 flex justify-center">
                    <ScrollbarToggler/>
                </div>
            </div>
        </div>
    )
}

export default CodeSnippet