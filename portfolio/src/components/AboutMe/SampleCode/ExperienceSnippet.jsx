import CloseIcon from "../SideDescription/CloseIcon.jsx";
import GistCard from "./GistCard.jsx";
import ScrollbarToggler from "../SideDescription/ScrollbarToggler.jsx";
import ExperienceCard from "./ExperienceCard.jsx";
import AvatarExperience from "./AvatarExperience.jsx";
import UnodosImage from "../../../assets/image/unodos.png";
import MDCCImage from "../../../assets/image/mdcc.png";
import HatawImage from "../../../assets/image/hataw.png";
import FEUImage from "../../../assets/image/feu.png";
import Omdeana from "../../../assets/image/omdena.jpg";

const experience = [
    {
        'avatar': UnodosImage,
        'job name': 'Frontend Developer',
        'company': 'Uno Dos International Gaming Corp.',
        'date': 'Oct 2023 - Present',
        'type': 'Full-time',
        'description': [
            'Designed UI/UX using Figma to create visually appealing and intuitive interfaces.',
            'Created website components, variants, and color palettes in Figma to ensure consistency in the design process.',
            'Transformed Swagger API documentation into functional components for seamless integration with frontend applications.',
            'Converted web design components into reusable React components, maintaining code quality and scalability.',
            'Collaborating with backend developers to integrate frontend components with backend APIs.'
        ]
    },
    {
        'avatar': Omdeana,
        'job name': 'Machine Learning Engineer',
        'company': 'Omdena',
        'date': 'Apr 2023 - Dec 2023',
        'type': 'Remote',
        'description': [
            'Utilized a supervised machine learning algorithm such as Naive Bayes and Support Vector Machines taken from Kaggle’s 16 personalities (MBTI) dataset.',
            'Utilized unsupervised machine learning algorithms such as K-Means Clustering and Principal Component Analysis (PCA) taken from OCEAN (big 5) Dataset.',
            'Utilized a supervised fine-tuning and reinforcement learning model LLaMA and other derivative models taken from Github’s AnnoMI Dataset.',
            'Data extraction, cleaning, and preprocessing using pandas, nltk, and user-defined cleaning functions',
        ]
    },
    {
        'avatar': MDCCImage,
        'job name': 'Web Developer',
        'company': 'Multi Development and Construction Corporation',
        'date': 'Oct 2021 - Feb 2022',
        'type': 'Full-time',
        'description': [
            'Developed MDCC Intranet, an employees e-learning platform with CMS.',
            'Designed the UI/UX using Figma, resulting in a visually appealing and user-friendly interface.',
            'Utilized TailwindCSS and jQuery to ensure a seamless user experience.',
            'Implemented a content management system (CMS) for easy management and updating of platform content.',
            'Added it to AWS and Azure using Python, ensuring easy access and scalability.'
        ]
    },
    {
        'avatar': HatawImage,
        'job name': 'Graphic Designer',
        'company': 'Hataw Enterprise',
        'date': 'Jun 2018 - Dec 2018',
        'type': 'Full-time',
        'description': [
            'Carefully selecting and compiling a burst of shots, amending each image to ensure that the images will fit in nicely on the e-commerce website',
            'Enhanced each image to create a seemless visuals to the e-commerce',
            'Created a descriptive infographics for products in the e-commerce website',
            'Created image description using the given word description and images.',
            'Designed banners, tarpaulin, logos and product header.',
            'Performed QA on image editing and web page uploads.',
            'Uploaded images and contents to Hataw web page.'
        ]
    },
    {
        'avatar': FEUImage,
        'job name': 'Freelance Developer',
        'company': 'FEU Institute of Technology',
        'date': 'Aug 2019 - Dec 2023',
        'type': 'Full-time',
        'description': [
            'Created three practical undergraduate thesis projects and several small projects, demonstrating proficiency in UI/UX design, popular tech stacks, and cutting-edge techniques. ',
            'Designed the UI/UX using Figma, resulting in a visually appealing and user-friendly interface.',
            'Built the projects using React.js, TailwindCSS, MongoDB, and Django, ensuring a seamless user experience.',
            'Preprocessed data using Pandas and NumPy to improve time series analysis, forecasting accuracy, and other analytic techniques. ',
            'Demonstrated strong problem-solving skills, attention to detail, and dedication to delivering high-quality projects.',
        ]
    },

]

const ExperienceSnippet = () => {
    return (
        <div className="w-full h-full">
            <div
                className="w-[173px] h-[34px] border-x border-[#1E2D3D] flex flex-row pl-4 justify-between pr-2 items-center">
                <div className="text-[12px] text-[#607B96]">Experience.jsx</div>
                <CloseIcon/>
            </div>
            <div className="h-full w-full border-t border-l border-[#1E2D3D] flex flex-row">
                <div className="w-full h-full border-r border-[#1E2D3D]
                                pt-[15px] px-4 text-[#607B96] text-[13px]">
                    <div className="">// Experience Showcase</div>
                    <div className="h-full no-scrollbar overflow-y-auto flex flex-col pb-32 gap-8 py-5">
                        {experience.map((job) => (
                            <ExperienceCard key={job['job name']} job={job}/>
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

export default ExperienceSnippet