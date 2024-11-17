import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/AboutMe/Sidebar/Sidebar.jsx";
import SideDescription from "../components/AboutMe/SideDescription/SideDescription.jsx";
import Editor from "../components/AboutMe/Editor.jsx";
import ExperienceSnippet from "../components/AboutMe/SampleCode/ExperienceSnippet.jsx";
import CodeSnippet from "../components/AboutMe/SampleCode/CodeSnippet.jsx";
import TextContainerExperience from "../components/AboutMe/Editor/TextContainerExperience.jsx";
import TextContainerHardSkills from "../components/AboutMe/Editor/TextContainerHardSkills.jsx";
import TextContainerSoftSkills from "../components/AboutMe/Editor/TextContainerSoftSkills.jsx";
import ProfessionalInfo from "../components/AboutMe/Sidebar/ProfessionalInfo.jsx";
import TextContainerBio from "../components/AboutMe/Editor/TextContainerBio.jsx";
import TextContainerInterest from "../components/AboutMe/Editor/TextContainerInterest.jsx";
import TextContainerEducation from "../components/AboutMe/Editor/TextContainerEducation.jsx";
import PersonalInfo from "../components/AboutMe/Sidebar/PersonalInfo.jsx";
import TextContainerSports from "../components/AboutMe/Editor/TextContainerSports.jsx";
import TextContainerPets from "../components/AboutMe/Editor/TextContainerPets.jsx";
import TextContainerManhwa from "../components/AboutMe/Editor/TextContainerManhwa.jsx";
import HobbiesInfo from "../components/AboutMe/Sidebar/HobbiesInfo.jsx";
import TitleCardDownIcon from "../components/AboutMe/TitleCardDownIcon.jsx";
import DropDownPressedIcon from "../components/AboutMe/DropDownPressedIcon.jsx";
import DropDownDefaultIcon from "../components/AboutMe/DropDownDefaultIcon.jsx";
import FolderIcon from "../components/AboutMe/FolderIcon.jsx";
import MailIcon from "../components/AboutMe/MailIcon.jsx";
import PhoneIcon from "../components/AboutMe/Sidebar/PhoneIcon.jsx";
import CloseIcon from "../components/AboutMe/SideDescription/CloseIcon.jsx";
import ScrollbarToggler from "../components/AboutMe/SideDescription/ScrollbarToggler.jsx";
import GistCard from "../components/AboutMe/SampleCode/GistCard.jsx";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import ContactMeSection from "../components/Contactme/ContactMeSection.jsx";
import FindMeAlsoSection from "../components/Contactme/FindMeAlsoSection.jsx";

const ContactMe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [isHeaderClicked, setIsHeaderClicked] = useState(false);

    const onHandleName = (e) => {
        setName(e.target.value)
    }

    const onHandleEmail = (e) => {
        setEmail(e.target.value);
    }

    const onHandleMessage = (e) => {
        setMessage(e.target.value);
    }

    return (
        <div
            className="bg-[#011627] overflow-auto lg:overflow-hidden w-full h-full mx-auto rounded-md border border-[#1E2D3D]">
            <Header isHeaderClicked={isHeaderClicked} setIsHeaderClicked={setIsHeaderClicked}/>
            <div
                className={`${isHeaderClicked ? "hidden" : ""} h-[56px] lg:hidden flex items-center pl-[18px] border-l border-[#1E2D3D]  lg:hover:bg-gray-800 border-b-2 text-[14px] text-gray-300 border-b-[#1E2D3D]`}>
                _contact-me
            </div>
            <div className={`${isHeaderClicked ? "hidden" : ""} w-full h-full flex flex-col lg:flex-row`}>
                <div className="border-r border-[#1E2D3D] lg:w-[312px] ">
                    <ContactMeSection/>
                    <FindMeAlsoSection/>
                </div>
                <div className="lg:w-full">
                    <div className="hidden w-[200px] h-[34px] border-r border-[#1E2D3D] lg:flex flex-row pl-4 justify-between pr-2 items-center">
                        <div className="text-[12px] text-[#607B96]">Contact.jsx</div>
                        <CloseIcon/>
                    </div>
                    <div className="h-full w-full border-t border-[#1E2D3D] flex flex-row">
                        <div className="w-full border-r border-[#1E2D3D]
                                pt-[42px] lg:pt-[55px] flex flex-row lg:pl-7 justify-center gap-2 text-[#607B96] text-[13px]
                                no-scrollbar overflow-y-auto">
                            <form className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                    <div className="lg:text-xs text-[16px] ">_name:</div>
                                    <input type="text" onChange={onHandleName}
                                           className="h-[41px] lg:h-[30px] w-[291px] lg:w-[252px] lg:text-xs text-[14px] bg-[#011221] border border-[#1C2B3A] rounded-md py-2 px-3 focus:border-[#607B96] focus:outline-0 focus:ring-[#607B96]"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="lg:text-xs text-[16px]">_email:</div>
                                    <input type="email" onChange={onHandleEmail}
                                           className="h-[41px] lg:h-[30px] w-[291px] lg:text-xs lg:w-[252px] text-[14px] bg-[#011221] border border-[#1C2B3A] rounded-md py-2 px-3 focus:border-[#607B96] focus:outline-0 focus:ring-[#607B96]"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="lg:text-xs text-[16px]">_message:</div>
                                    <textarea onChange={onHandleMessage}
                                              className="h-[145px] lg:text-xs lg:h-[90px] w-[291px] lg:w-[252px] text-[14px] bg-[#011221] border border-[#1C2B3A] rounded-md py-2 px-3 no-scrollbar focus:border-[#607B96] focus:outline-0 focus:ring-[#607B96]"/>
                                </div>
                                <button
                                    className="h-[38px] mb-10 w-[146px] bg-[#1C2B3A] rounded-md text-[14px] lg:text-[10px] lg:w-32 lg:h-6 text-gray-300 hover:bg-gray-700">submit-message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block w-full h-full">
                    <div
                        className="w-[173px] h-[34px] border-x border-[#1E2D3D] flex flex-row pl-4 justify-between pr-2 items-center">
                        <div className="text-[12px] text-[#607B96]">code-snippet.jsx</div>
                        <CloseIcon/>
                    </div>
                    <div className="h-[452px] w-full border-t border-l border-[#1E2D3D] flex flex-row">
                        <div className="w-full h-full border-r border-[#1E2D3D]
                                pt-8 flex flex-row pl-7  gap-2 text-[#607B96] text-[13px]
                                no-scrollbar overflow-y-auto">
                            <div className="mr-6">
                                {Array.from({length: 12}, (_, i) => i + 1).map((line, index) => (
                                    <div key={index}>{line}</div>
                                ))}
                            </div>
                            <div>
                                <div><span className="text-[#C98BDF]">const</span> <span
                                    className="text-[#5565E8]">button</span> <span
                                    className="text-[#C98BDF]">=</span> <span
                                    className="text-[#5565E8]">document.querySelector</span><span
                                    className="text-[#607B96]">(<span
                                    className="text-[#FEA55F]">'#sendBtn'</span>);</span>
                                </div>
                                <br/>
                                <div>
                                    <span><span className="text-[#C98BDF]">const</span> <span
                                        className="text-[#5565E8]">message</span> <span
                                        className="text-[#C98BDF]">=</span>{` {`}</span><br/>
                                    <span className="pl-6"><span className="text-[#5565E8]">name</span> : <span
                                        className="text-[#FEA55F]">"{name}"</span>,</span><br/>
                                    <span className="pl-6"><span className="text-[#5565E8]">email</span> : <span
                                        className="text-[#FEA55F]">"{email}"</span>,</span><br/>
                                    <span className="pl-6"><span className="text-[#5565E8]">message</span> : <span
                                        className="text-[#FEA55F]">"{message}"</span>,</span><br/>
                                    <span className="pl-6"><span className="text-[#5565E8]">date</span> : <span
                                        className="text-[#FEA55F]">"{new Date().toDateString()}"</span>,</span><br/>

                                    <span>{`}`}</span>
                                </div>
                                <br/>
                                <div>
                                    <span><span className="text-[#5565E8]">button</span>.<span
                                        className="text-[#5565E8]">addEventListener</span>( <span
                                        className="text-[#FEA55F]">'click'</span> ), () <span
                                        className="text-[#C98BDF]">{'=>'}</span> <span>{`{`}</span></span><br/>
                                    <span className="pl-6"><span className="text-[#5565E8]">form</span>.<span
                                        className="text-[#5565E8]">send</span>  ( <span
                                        className="text-[#5565E8]">message</span> );</span><br/>
                                    <span>{`})`}</span><br/>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20px] h-full pt-1 flex justify-center">
                            <ScrollbarToggler/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactMe