import DropDownPressedIcon from "./DropDownPressedIcon.jsx";
import DropDownDefaultIcon from "./DropDownDefaultIcon.jsx";
import FolderIcon from "./FolderIcon.jsx";

const color = ["#E99287", "#43D9AD", "#3A49A4"]

const InfoSectionTab = ({subSection, info, setSubSection, name, index, isOpen}) => {
    const handleClick = () => {
        setSubSection(name)
    }

    return (
        <button
            className={`py-[6px] pl-4 flex flex-row gap-2 items-center group hover:bg-gray-800 ${subSection === name ? "bg-gray-800" : ""}`}
            onClick={handleClick}>
            {isOpen ? (
                <DropDownPressedIcon className="mr-[5px]"/>
            ) : (
                <DropDownDefaultIcon className="mr-[5px]"/>
            )}
            <FolderIcon index={color[index]}
                className={`fill-[${color[index]}] ${subSection === name ? "animate-bounce" : "animate-pulse"}`}/>
            <div
                className={`text-[13px] text-[#607B96] group-hover:text-gray-50 ${subSection === name ? "text-gray-300" : ""}`}>{name}</div>
        </button>
    )
}

export default InfoSectionTab