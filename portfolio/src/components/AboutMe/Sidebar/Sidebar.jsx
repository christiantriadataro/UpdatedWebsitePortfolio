import ProfessionalInfo from "./ProfessionalInfo.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import HobbiesInfo from "./HobbiesInfo.jsx";
import TextContainerBio from "../Editor/TextContainerBio.jsx";
import TextContainerInterest from "../Editor/TextContainerInterest.jsx";
import TextContainerEducation from "../Editor/TextContainerEducation.jsx";
import TextContainerExperience from "../Editor/TextContainerExperience.jsx";
import TextContainerHardSkills from "../Editor/TextContainerHardSkills.jsx";
import TextContainerSoftSkills from "../Editor/TextContainerSoftSkills.jsx";
import TextContainerSports from "../Editor/TextContainerSports.jsx";
import TextContainerPets from "../Editor/TextContainerPets.jsx";
import TextContainerManhwa from "../Editor/TextContainerManhwa.jsx";
import {useEffect} from "react";

const info = [
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

// 607B96
const Sidebar = ({setInfo, setSubSection, info}) => {

    return (
        <div className="w-[61px] h-full hidden lg:flex flex-col border-r border-[#1E2D3D]">
            <button
                className={`flex justify-center items-center h-[55px] p-3 group hover:bg-gray-800 ${info.title === 'professional-info' ? "bg-gray-800" : ""}`}
                onClick={() => {
                    setInfo({
                        title: 'professional-info',
                        section: {
                            'experience': <TextContainerExperience/>,
                            'hard-skills': <TextContainerHardSkills/>,
                            'soft-skills': <TextContainerSoftSkills/>
                        },
                        num: {'experience': 14, 'hard-skills': 11, 'soft-skills': 20},
                    })
                }
                }
            >
                <ProfessionalInfo info={info}/>
            </button>
            <button
                className={`flex justify-center items-center h-[55px] group hover:bg-gray-800 ${info.title === 'personal-info' ? "bg-gray-800" : ""}`}
                onClick={() => {
                    setInfo(
                        {
                            title: 'personal-info',
                            section: {
                                'bio': <TextContainerBio/>,
                                'interest': <TextContainerInterest/>,
                                'education': <TextContainerEducation/>
                            },
                            num: {'bio': 27, 'interest': 11, 'education': 20},
                        })
                }
                }
            >
                <PersonalInfo info={info}/>
            </button>
            <button
                className={`flex justify-center items-center h-[55px] group hover:bg-gray-800 ${info.title === 'hobbies-info' ? "bg-gray-800" : ""}`}
                onClick={() => {
                    setInfo({
                        title: 'hobbies-info',
                        section: {
                            'sports': <TextContainerSports/>,
                            'pets': <TextContainerPets/>,
                            'manhwa': <TextContainerManhwa/>
                        },
                        num: {'sports': 27, 'pets': 11, 'manhwa': 20},
                    })
                }
                }
            >
                <HobbiesInfo info={info}/>
            </button>
        </div>
    )
}

export default Sidebar