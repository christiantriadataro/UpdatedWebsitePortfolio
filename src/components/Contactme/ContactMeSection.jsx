import TitleCardDownIcon from "../AboutMe/TitleCardDownIcon.jsx";
import MailIcon from "../AboutMe/MailIcon.jsx";
import PhoneIcon from "../AboutMe/Sidebar/PhoneIcon.jsx";
import {useState} from "react";
const ContactMeSection = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={handleClick} className="h-[35px] w-full border-b border-[#1E2D3D]
                            flex flex-row pl-4 items-center bg-[#1E2D3D] gap-2">
                <TitleCardDownIcon className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`} />
                <div className="text-gray-50 text-[13px]">contact-me</div>
            </button>
            <div className={`${isOpen ? "" : "hidden"} transition duration-100 flex flex-col pt-2 border-b border-[#1E2D3D]`}>
                <div className="py-[6px] pl-8  flex flex-row gap-2 items-center group hover:bg-gray-800">
                    <MailIcon/>
                    <div
                        className="text-[12px] text-[#607B96] truncate group-hover:text-gray-50 mr-4">christiantriadataro@gmail.com
                    </div>
                </div>
                <div className="py-[6px] pl-8 flex flex-row gap-2 items-center group hover:bg-gray-800">
                    <PhoneIcon/>
                    <div
                        className="text-[12px] text-[#607B96] truncate group-hover:text-gray-50 mr-4">+63
                        9942808816
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMeSection