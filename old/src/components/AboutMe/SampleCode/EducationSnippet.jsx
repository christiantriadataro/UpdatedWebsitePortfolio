import CloseIcon from "../SideDescription/CloseIcon.jsx";
import GistCard from "./GistCard.jsx";
import ScrollbarToggler from "../SideDescription/ScrollbarToggler.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import FEUImage from "../../../assets/image/feu.png";
import OLFUImage from "../../../assets/image/olfu.png";
import EducationCard from "./EducationCard.jsx";

const education = [
    {
        'avatar': FEUImage,
        'company': 'FEU Institute of Technology',
        'course': 'Bachelor of Computer Science major in Software Engineering',
        'place': 'Sampaloc, Manila',
    },
    {
        'avatar': OLFUImage,
        'company': 'Our Lady of Fatima University',
        'course': 'STEM Strand',
        'place': 'Valenzuela',
    },
]

const EducationSnippet = () => {
    return (
        <div className="lg:w-full h-fit lg:h-full ">
            <div
                className="w-[173px] h-[34px] border-t border-x border-[#1E2D3D] flex flex-row pl-4 justify-between pr-2 items-center">
                <div className="text-[12px] text-[#607B96]">Education.jsx</div>
                <CloseIcon/>
            </div>
            <div className="lg:h-full w-full  border-t border-l border-[#1E2D3D] flex flex-row">
                <div className="w-full lg:h-full border-r border-[#1E2D3D]
                                pt-[15px] px-4 text-[#607B96] text-[13px]">
                    <div className="">// Education Showcase</div>
                    <div className="h-[200px] lg:h-[417px] no-scrollbar overflow-y-auto flex flex-col gap-8 py-5">
                        {education.map((job) => (
                            <EducationCard key={job['company']} job={job} />
                        ))}
                    </div>
                </div>
                <div className="w-[20px] h-full pt-1 flex justify-center">
                    <ScrollbarToggler/>
                </div>
            </div>
        </div>
    )
}

export default EducationSnippet