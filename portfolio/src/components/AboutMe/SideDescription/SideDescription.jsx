import TitleCardDownIcon from "../TitleCardDownIcon.jsx";
import DropDownDefaultIcon from "../DropDownDefaultIcon.jsx";
import FolderIcon from "../FolderIcon.jsx";
import DropDownPressedIcon from "../DropDownPressedIcon.jsx";
import MarkDownIcon from "../MarkDownIcon.jsx";
import MailIcon from "../MailIcon.jsx";
import PhoneIcon from "../Sidebar/PhoneIcon.jsx";

const SideDescription = ({info, setSubSection, subSection}) => {
    return (
        <div className="w-[219px] h-full border-r border-[#1E2D3D]">
            <div className="h-[226px]">
                <div className="h-[35px] border-b border-[#1E2D3D]
                            flex flex-row pl-4 items-center gap-2">
                    <TitleCardDownIcon/>
                    <div className="text-gray-50 text-[13px]">{info.title}</div>
                </div>
                <div className="h-[185px] flex flex-col pt-2 border-b border-[#1E2D3D]">
                    <button className={`py-[6px] pl-4 flex flex-row gap-2 items-center group hover:bg-gray-800 ${subSection === Object.keys(info.section)[0] ? "bg-gray-800" : ""}`}
                    onClick={() => setSubSection(Object.keys(info.section)[0])}>
                        {subSection === Object.keys(info.section)[0] ? (
                            <DropDownPressedIcon className="mr-[5px]"/>
                        ) : (
                            <DropDownDefaultIcon className="mr-[5px]"/>
                        )}
                        <FolderIcon className={subSection === Object.keys(info.section)[0] ? "animate-bounce" : "animate-pulse"}/>
                        <div className={`text-[13px] text-[#607B96] group-hover:text-gray-50 ${subSection === Object.keys(info.section)[0] ? "text-gray-300" : ""}`}>{Object.keys(info.section)[0]}</div>
                    </button>
                    <button className={`py-[6px] pl-4 flex flex-row gap-2 items-center group hover:bg-gray-800 ${subSection === Object.keys(info.section)[1] ? "bg-gray-800" : ""}`}
                            onClick={() => setSubSection(Object.keys(info.section)[1])}>
                        {subSection === Object.keys(info.section)[1] ? (
                            <DropDownPressedIcon className="mr-[5px]"/>
                        ) : (
                            <DropDownDefaultIcon className="mr-[5px]"/>
                        )}
                        <FolderIcon className={`fill-[#43D9AD] ${subSection === Object.keys(info.section)[1] ? "animate-bounce" : "animate-pulse"}`}/>
                        <div
                            className={`text-[13px] text-[#607B96] group-hover:text-gray-50 ${subSection === Object.keys(info.section)[1] ? "text-gray-300" : ""}`}>{Object.keys(info.section)[1]}</div>
                    </button>
                    <div
                        className={`flex flex-col  ${subSection === Object.keys(info.section)[2] ? "" : "group hover:bg-gray-800"}`}
                         onClick={() => setSubSection(Object.keys(info.section)[2])}>
                        <button className={`pl-4 py-[6px]  flex flex-row gap-2 items-center ${subSection === Object.keys(info.section)[2] ? "bg-gray-800" : ""}`}>
                            { subSection === Object.keys(info.section)[2] ? (<DropDownPressedIcon className="mr-[5px]"/>) : (<DropDownDefaultIcon className="mr-[5px]"/>)}
                            <FolderIcon className={`fill-[#3A49A4] ${subSection === Object.keys(info.section)[2] ? "animate-bounce" : "animate-pulse"}`}/>
                            <div className={`text-[13px] text-[#607B96] group-hover:text-gray-50 ${subSection === Object.keys(info.section)[2] ? "text-gray-300" : ""}`}>{Object.keys(info.section)[2]}</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[255px] ">
                <div className="h-[35px] border-b border-[#1E2D3D]
                            flex flex-row pl-4 items-center gap-2">
                    <TitleCardDownIcon/>
                    <div className="text-gray-50 text-[13px]">contacts</div>
                </div>
                <div className="h-[215px] flex flex-col pt-2">
                    <div className="py-[6px] pl-8  flex flex-row gap-2 items-center group hover:bg-gray-800">
                        <MailIcon/>
                        <div
                            className="text-[12px] text-[#607B96] truncate group-hover:text-gray-50 mr-4">christiantriadataro@gmail.com
                        </div>
                    </div>
                    <div className="py-[6px] pl-8 flex flex-row gap-2 items-center group hover:bg-gray-800">
                        <PhoneIcon/>
                        <div
                            className="text-[12px] text-[#607B96] truncate group-hover:text-gray-50 mr-4">+63 9942808816
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideDescription