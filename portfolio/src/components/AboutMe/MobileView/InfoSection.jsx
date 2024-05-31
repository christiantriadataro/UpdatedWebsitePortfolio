import Header from "../../Header/Header.jsx";
import TextContainerExperience from "../Editor/TextContainerExperience.jsx";
import TextContainerHardSkills from "../Editor/TextContainerHardSkills.jsx";
import TextContainerSoftSkills from "../Editor/TextContainerSoftSkills.jsx";
import ProfessionalInfo from "../Sidebar/ProfessionalInfo.jsx";
import TitleCardDownIcon from "../TitleCardDownIcon.jsx";
import DropDownPressedIcon from "../DropDownPressedIcon.jsx";
import DropDownDefaultIcon from "../DropDownDefaultIcon.jsx";
import FolderIcon from "../FolderIcon.jsx";
import InfoSectionTab from "../InfoSectionTab.jsx";
import {useState} from "react";
import PersonalInfo from "../Sidebar/PersonalInfo.jsx";
import HobbiesInfo from "../Sidebar/HobbiesInfo.jsx";


const InfoSection = ({isHeaderClicked, setInfo, info, subSection, setSubSection, index, setCurrentIndex}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setInfo(info)
        setSubSection(subSection)
        setIsOpen(!isOpen)
        setCurrentIndex(index)
    }

    const icons = [<ProfessionalInfo isOpen={isOpen} info={info} />, <PersonalInfo isOpen={isOpen} info={info} />, <HobbiesInfo isOpen={isOpen} info={info} />]

    return (
            <div className={` ${isHeaderClicked ? "hidden" : ""} w-full lg:hidden`}>
                <div className="w-full flex flex-col border-b border-[#1E2D3D]">
                    <button
                        className={`flex pl-5 items-center h-[35px] flex-row group hover:bg-gray-800 ${isOpen ? "bg-gray-800" : ""}`}
                        onClick={handleClick}
                    >
                       {icons[index]}
                        <div className="
                            flex flex-row pl-4 items-center gap-2">
                            <TitleCardDownIcon className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`}/>
                            <div className="text-gray-50 text-[13px]">{info.title}</div>
                        </div>
                    </button>
                    <div className={`${isOpen ? "" : "hidden"} w-full h-full border-r border-[#1E2D3D]`}>
                        <div className={`h-full flex flex-col border-b border-[#1E2D3D]`}>
                            {Object.keys(info.section).map((section, index) =>  {
                                // console.log(section)
                                return <InfoSectionTab isOpen={isOpen} key={index} index={index} name={section} subSection={subSection} info={info} setSubSection={setSubSection} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default InfoSection