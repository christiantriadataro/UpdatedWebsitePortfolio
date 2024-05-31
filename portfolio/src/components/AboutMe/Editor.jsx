import CloseIcon from "./SideDescription/CloseIcon.jsx";
import ScrollbarToggler from "./SideDescription/ScrollbarToggler.jsx";
import TextContainerBio from "./Editor/TextContainerBio.jsx";
import TextContainerInterest from "./Editor/TextContainerInterest.jsx";
import TextContainerEducation from "./Editor/TextContainerEducation.jsx";

const Editor = ({info, subSection, index}) => {
    const lines = Array.from({length: 27}, (_, i) => i + 1)

    return (
        <div className="w-">
            <div
                className="w-[200px]  h-[34px] border-r border-[#1E2D3D] flex flex-row pl-4 justify-between pr-2 items-center">
                <div className="text-[12px] text-[#607B96]">{info.title}.js</div>
                <CloseIcon/>
            </div>
            <div className="h-[200px] lg:h-full overflow-auto w-full border-t border-[#1E2D3D] flex flex-row mb-5">
                <div className="w-full border-r border-[#1E2D3D]
                                pt-[15px] flex flex-row pl-7 gap-2 text-[#607B96] text-[13px]
                                no-scrollbar overflow-y-auto">
                    <div className="mr-6">
                        {Array.from({length: info.num[subSection]}, (_, i) => i + 1).map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
                    </div>
                    <div className="">
                        <div>/**</div>
                        {Array.from({length: info.num[subSection]}, (_, i) => i + 1).map((lines, index) => {
                            return index > 1 ? <div key={index}>*</div> : ""
                        })}
                        <div>*/</div>
                    </div>
                    {info.section[subSection]}
                    {/*{info.section[subSection]}*/}
                    {/*<TextContainerBio />*/}
                </div>
                <div className="w-[20px] pt-1 flex justify-center">
                    <ScrollbarToggler/>
                </div>
            </div>
        </div>
    )
}

export default Editor