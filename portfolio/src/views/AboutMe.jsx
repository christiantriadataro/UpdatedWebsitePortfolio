import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {useState} from "react";
import Editor from "../components/AboutMe/Editor.jsx";
import TextContainerBio from "../components/AboutMe/Editor/TextContainerBio.jsx";
import TextContainerInterest from "../components/AboutMe/Editor/TextContainerInterest.jsx";
import TextContainerEducation from "../components/AboutMe/Editor/TextContainerEducation.jsx";
import TextContainerExperience from "../components/AboutMe/Editor/TextContainerExperience.jsx";
import TextContainerHardSkills from "../components/AboutMe/Editor/TextContainerHardSkills.jsx";
import TextContainerSoftSkills from "../components/AboutMe/Editor/TextContainerSoftSkills.jsx";
import TextContainerSports from "../components/AboutMe/Editor/TextContainerSports.jsx";
import TextContainerPets from "../components/AboutMe/Editor/TextContainerPets.jsx";
import TextContainerManhwa from "../components/AboutMe/Editor/TextContainerManhwa.jsx";
import InfoSection from "../components/AboutMe/MobileView/InfoSection.jsx";
import InputCode from "../components/AboutMe/SampleCode/InputCode.jsx";
import ExperienceCard from "../components/AboutMe/SampleCode/ExperienceCard.jsx";
import ExperienceSnippet from "../components/AboutMe/SampleCode/ExperienceSnippet.jsx";
import EducationSnippet from "../components/AboutMe/SampleCode/EducationSnippet.jsx";
import CodeSnippet from "../components/AboutMe/SampleCode/CodeSnippet.jsx";
import Sidebar from "../components/AboutMe/Sidebar/Sidebar.jsx";
import {isNodeFirstInLine} from "eslint-plugin-react/lib/util/ast.js";
import SideDescription from "../components/AboutMe/SideDescription/SideDescription.jsx";

const infoObj = [
    {
        title: 'professional-info',
        section: {
            'experience': <TextContainerExperience/>,
            'hard-skills': <TextContainerHardSkills/>,
            'soft-skills': <TextContainerSoftSkills/>
        },
        num: {'experience': 14, 'hard-skills': 11, 'soft-skills': 20},
    },
    {
        title: 'personal-info',
        section: {
            'bio': <TextContainerBio/>,
            'interest': <TextContainerInterest/>,
            'education': <TextContainerEducation/>
        },
        num: {'bio': 27, 'interest': 11, 'education': 20},
    },
    {
        title: 'hobbies-info',
        section: {
            'sports': <TextContainerSports/>,
            'pets': <TextContainerPets/>,
            'manhwa': <TextContainerManhwa/>
        },
        num: {'sports': 27, 'pets': 11, 'manhwa': 20},
    }
]


// bg-[#1E2D3D]
const AboutMe = () => {
    const [info, setInfo] = useState(infoObj[1]);
    const [isHeaderClicked, setIsHeaderClicked] = useState(false);
    const [subSection, setSubSection] = useState(Object.keys(infoObj[1].section)[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div
            className="bg-[#011627] h-full lg:overflow-hidden w-full mx-auto lg:w-[1243px] rounded-md lg:flex flex-col lg:justify-between border border-[#1E2D3D]">
            <Header isHeaderClicked={isHeaderClicked} setIsHeaderClicked={setIsHeaderClicked}/>
            <div
                className={`lg:hidden h-[56px] flex items-center pl-[18px] border-l border-[#1E2D3D] lg:hover:bg-gray-800 border-b-2 text-[14px] text-gray-300 border-b-[#1E2D3D]`}>
                _about-me
            </div>
            <div className="flex w-full h-full">
                {infoObj.map((item, index) => {
                return <InfoSection setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} key={index}
                                    index={index} isHeaderClicked={isHeaderClicked} info={item}
                                    setInfo={setInfo} subSection={subSection} setSubSection={setSubSection}/>
            })}
            <Sidebar info={info} setSubSection={setSubSection} setInfo={setInfo}/>
            <SideDescription info={info} subSection={subSection} setSubSection={setSubSection}/>
            {console.log(subSection)}
            <div className="w-full">
                <Editor info={info} subSection={subSection} index={currentIndex}/>
            </div>
            <div className="lg:w-full">
                {subSection === "bio" ? <EducationSnippet/> : (subSection === "experience" ? <ExperienceSnippet/> :
                    <CodeSnippet/>)}
            </div>
            </div>

            <Footer/>
        </div>
    )
}

export default AboutMe