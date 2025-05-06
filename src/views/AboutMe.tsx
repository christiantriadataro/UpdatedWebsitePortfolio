import TitleCardDownIcon from "../components/icons/TitleCardDownIcon.tsx";
import {useState} from "react";
import {Link} from "@tanstack/react-router";
import FigmaIconComponent from "../components/icons/FigmaIconComponent.tsx";
import GithubIconComponent from "../components/icons/GithubIconComponent.tsx";
import data from "../../data/data.json";

const SIDEITEM_TABS = [
    {
        title: "bio",
        color: "fill-accent-red",
    },
    {
        title: "experience",
        color: "fill-accent-orange",
    },
    {
        title: "education",
        color: "fill-accent-green",
    },
    {
        title: "moocs",
        color: "fill-accent-pink",
    },
];

const AboutMe = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClicked = () => setIsOpen(!isOpen);

    return (
        <div className="h-full sm:w-full flex flex-col sm:flex-row">
            <div className="sm:min-w-72 w-full h-fit lg:h-full xl:w-5 lg:w-1/12 border-r border-lines">
                <button
                    className={`w-full h-[35px] border-b border-lines
                            flex flex-row pl-4 items-center gap-2`}
                    onClick={handleClicked}
                >
                    <TitleCardDownIcon
                        className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`}
                    />
                    <div id="bio" className="text-gray-50 text-[13px]">
                        bio
                    </div>
                </button>
                {isOpen && (
                    <div
                        className={`${isOpen ? "" : "hidden"} transition duration-100 text-[13px] text-[#273E53]`}
                    >
                        {SIDEITEM_TABS.map((item) => (
                            <SideItem
                                title={item.title}
                                id={`#${item.title}`}
                                color={item.color}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="w-full h-full flex flex-col">
                <div className=" w-full border-b border-lines text-sm text-secondary-blue">
                    <div className="border-r py-1 lg:py-[17px] flex items-center w-fit px-3 border-lines h-full">
                        {/*Courses.tsx;*/}
                    </div>
                </div>
                <div className="py-16 max-sm:px-16 lg:px-16 gap-y-16 gap-x-5 flex flex-col md:overflow-y-auto">
                    <div className="text-secondary-blue text-sm">
                        Hi @everyone! 👋 My name is Christian Dataro and I'm Software Engineer. Some years ago I decided
                        to refuse Hogwarts Acceptance
                        Letter to learn another type of magic. I'm currently searching for a
                        Software Engineer. The most of my software is built with NestJs
                        and NextJS, TypeScript.
                    </div>
                    <SectionExperience/>
                    <SectionEducation/>
                    <SectionMoocs/>
                </div>
            </div>
        </div>
    );
};

const EXPERIENCE_TABS = [
    {
        image: "/assets/image/cubework.jpg",
        position: "Mid Software Engineer",
        place: "CareerTeam Inc.",
        from: "Jan 2025 - Present",
        type: "Contractual",
        description: [
            "Designed UI/UX using Figma to create visually appealing and intuitive interfaces.",
            "Created website components, variants, and color palettes in Figma to ensure consistency in the design process.",
            "Converted web design components into reusable React components, maintaining code quality and scalability.",
            "Collaborating with backend developers to integrate frontend components with backend APIs.",
            "Discussing with US Business Analyst, Chinese Managers, Project Managers, and other teams about the functional requirements needed to make sure that it aligns with the requirements and timeline.",
            "Implemented Frontend System Design to make sure the functional requirements aligns with the client needs while optimizing the overall system.",
            "Used Technologies: Figma, Tailwind, NextJS, NestJS, TanStack Router, TypeScript, Axios, Postman, ShadCN, TanStack Query",
        ],
    },
    {
        image: "/assets/image/cubework.jpg",
        position: "Mid Software Engineer",
        place: "Cubework Inc.",
        from: "Aug 2024 - Present",
        type: "Full-time",
        description: [
            "Designed UI/UX using Figma to create visually appealing and intuitive interfaces.",
            "Created website components, variants, and color palettes in Figma to ensure consistency in the design process.",
            "Converted web design components into reusable React components, maintaining code quality and scalability.",
            "Collaborating with backend developers to integrate frontend components with backend APIs.",
            "Discussing with US Business Analyst, Chinese Managers, Project Managers, and other teams about the functional requirements needed to make sure that it aligns with the requirements and timeline.",
            "Implemented Frontend System Design to make sure the functional requirements aligns with the client needs while optimizing the overall system.",
            "Used Technologies: Figma, Tailwind, NextJS, NestJS, TanStack Router, TypeScript, Axios, Postman, ShadCN, TanStack Query",
        ],
    },
    {
        image: "/assets/image/unodos.png",
        position: "Software Engineer",
        place: "Uno Dos International Gaming Corp.",
        from: "Oct 2023 - August 2024",
        type: "Full-time",
        description: [
            "Designed UI/UX using Figma to create visually appealing and intuitive interfaces.",
            "Created website components, variants, and color palettes in Figma to ensure consistency in the design process.",
            "Transformed Swagger API documentation into functional components for seamless integration with frontend applications.",
            "Converted web design components into reusable React components, maintaining code quality and scalability.",
            "Collaborating with backend developers to integrate frontend components with backend APIs.",
            "Used Technologies: Figma, Tailwind, NextJS, TypeScript, Axios, SignalR, Redux, Postman, BrowserStack, Sentry, NextJS",
        ],
    },
    {
        image: "/assets/image/omdena.jpg",
        position: "AI Software Engineer",
        place: "Omdena",
        from: "Feb 2022 - Aug 2023",
        type: "Full-time",
        description: [
            "Designed UI/UX using Figma to create visually appealing and intuitive interfaces.",
            "Created website components, variants, and color palettes in Figma to ensure consistency in the design process.",
            "Converted web design components into reusable React components, maintaining code quality and scalability.",
            "Discussing with 60+ members and other teams about the functional requirements needed to make sure that it aligns with the requirements and timeline.",
            "Collaborating with backend developers to integrate frontend components with backend APIs.",
            "Deployed several AI models and ML services in the backend.",
            "Created a backend using FastAPI to deploy AI models and ML services.",
            "Used Technologies: Figma, Tailwind, React, TypeScript, Axios, Python, FastAPI, Redux, Postman, BrowserStack, Sentry",
            "AI Technologies: TensorFlow, PyTorch, scikit-learn, Keras, Pandas, NumPy, Dask, Polars, NLTK, spaCy, Transformers, OpenCV, Pillow, Matplotlib, Seaborn, Plotly, Scrapy, Beautiful Soup, SciPy, Statsmodels, H2O.ai",
        ],
    },
    {
        image: "/assets/image/mdcc-final.png",
        position: "Full Stack Developer",
        place: "Multi Development and Construction Corporation",
        from: "Aug 2021 - Feb 2022",
        type: "Full-time",
        description: [
            "Developed MDCC Intranet, an employees e-learning platform with CMS.",
            "Designed the UI/UX using Figma, resulting in a visually appealing and user-friendly interface.",
            "Utilized TailwindCSS and jQuery to ensure a seamless user experience.",
            "Implemented a content management system (CMS) for easy management and updating of platform content.",
            "Added it to AWS and Azure using Python, ensuring easy access and scalability.",
            "Used Technologies: Figma, Tailwind, React, TypeScript, Axios, NodeJS, Redux, Postman ",
        ],
    },
    {
        image: "/assets/image/hataw.png",
        position: "Graphic Designer",
        place: "Hataw Enterprise",
        from: "Jun 2018 - Dec 2018",
        type: "Full-time",
        description: [
            "Carefully selecting and compiling a burst of shots, amending each image to ensure that the images will fit in nicely on the e-commerce website",
            "Created image description using the given word description and images.",
            "Designed banners, tarpaulin, logos and product header.",
            "Performed QA on image editing and web page uploads.",
            "Used Technologies: Adobe Photoshop, Adobe Illustrator",
        ],
    },
];

const SectionExperience = () => {
    return (
        <>
            <div id="experience" className="text-center text-accent-pink">
                Work Experience
            </div>
            {EXPERIENCE_TABS.map((item) => (
                <div className="flex text-secondary-blue text-sm flex-col gap-4 w-full">
                    <div className="flex flex-row w-full items-center justify-between ">
                        <div className="flex items-center gap-2 ">
                            <div className="rounded-full h-14 w-14 bg-secondary-white">
                                <img
                                    src={item.image}
                                    alt=""
                                    className="h-14 w-14 bg-cover rounded-full "
                                />
                            </div>
                            <div className="">
                                <div>{item.position}</div>
                                <div>{item.place}</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <div>{item.from}</div>
                            <div>{item.type}</div>
                        </div>
                    </div>
                    <div className="flex text-[13px] flex-col w-full justify-between">
                        {item.description.map((phrase) => (
                            <span>- {phrase}</span>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

const EDUCATION_TABS = [
    {
        image: "/assets/image/dap.png",
        course: "Data Engineering",
        school: "Development Academy of The Philippines",
        place: "Remote",
    },
    {
        image: "/assets/image/feu.png",
        course: "Computer Science specializing in software engineering",
        school: "FEU Institute of Technology",
        place: "Sampaloc, Manila",
    },
];

const SectionEducation = () => {
    return (
        <>
            <div id="education" className="text-center text-accent-pink">
                Education
            </div>
            {EDUCATION_TABS.map((item) => (
                <div className="flex text-secondary-blue text-sm flex-row items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full h-14 w-14 bg-secondary-white">
                            <img src={item.image} alt="" className="h-14 w-14"/>
                        </div>
                        <div className="">
                            <div>{item.course}</div>
                            <div>{item.school}</div>
                        </div>
                    </div>
                    <div className="">{item.place}</div>
                </div>
            ))}
        </>
    );
};

const SectionMoocs = () => {
    const courses = data["about-me"].moocs;
    return (
        <>
            <div id="moocs" className="text-center text-accent-pink">
                MOOCS
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-6">
                {courses.map((course) => (
                    <Card image={course.image} title={course.title}/>
                ))}
            </div>
        </>
    );
};

const FolderIcon = ({color}: { color?: string }) => {
    return (
        <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${color}`}
        >
            <path
                d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"/>
        </svg>
    );
};

const SideItem = ({
                      title,
                      id,
                      color,
                  }: {
    title: string;
    id: string;
    color: string;
}) => {
    return (
        <a
            href={id}
            className=" py-[6px] w-full pl-4 flex flex-row gap-2 items-center group hover:bg-gray-800"
            // onClick={onCheck}
        >
            <img
                src="/assets/icons/FilterIcon.svg"
                // isClicked={isChecked}
                className="w-3.5 h-3.5"
            />
            <FolderIcon color={color}/>
            {/*<div className={`group-hover:text-gray-300 ${!isChecked ? "text-gray-300" : "text-secondary-blue"}`}>*/}
            <div className={`group-hover:text-gray-300`}>
                {/*{title.split(" ").join("-").toLowerCase()}*/}
                {title}
            </div>
        </a>
    );
};

const Card = ({image, title}: { image: string; title: string }) => {
    return (
        <div className="w-full lg:w-48">
            <div className=" text-secondary-blue font-bold text-[12px] lg:text-[10px] truncate">
                // {title.split(" ").join("-").toLowerCase()}
            </div>
            <div className="w-full lg:w-48 h-[150px] border border-lines rounded-lg ">
                <div
                    className="w-full h-4/6 py-2 bg-cover bg-center rounded-t-lg"
                    style={{backgroundImage: `url(${image})`}}
                ></div>
                <div className="w-full h-2/6 text-secondary-blue text-[10px] no-scrollbar overflow-y-auto">
                    <div className="sticky h-full top-0 flex justify-between bg-[#011627]">
                        <Link
                            to={"/not-found" as string}
                            className="w-full group flex gap-2 py-2 px-2 items-center hover:bg-gray-800"
                        >
                            <FigmaIconComponent className="group-hover:fill-secondary-blue-violet"/>
                            <div className="group-hover:font-bold group-hover:text-secondary-blue-violet">
                                figma
                            </div>
                        </Link>
                        <Link
                            to={"/not-found" as string}
                            className="w-full group flex gap-2 py-2 px-2 items-center hover:bg-gray-800"
                        >
                            <GithubIconComponent className="group-hover:fill-accent-orange"/>
                            <div className="group-hover:font-bold group-hover:text-accent-orange">
                                view-code
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
