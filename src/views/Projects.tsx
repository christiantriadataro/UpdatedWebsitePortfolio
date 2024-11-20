import {useState} from "react";

import ReactIcon from "../assets/icons/react.svg"
import CompanyIcon from "../assets/icons/company-scale-project.svg"
import SideIcon from "../assets/icons/side-project.svg"
import SmallIcon from "../assets/icons/small-project.svg"
import TailwindIcon from "../assets/icons/tailwind.svg"
import DjangoIcon from "../assets/icons/django.svg"
import FigmaIcon from "../assets/icons/figma.svg"
import PHPIcon from "../assets/icons/php.svg"
import RESTAPIIcon from "../assets/icons/rest-api.svg"
import UnityIcon from "../assets/icons/unity.svg"
import AIIcon from "../assets/icons/machine-learning.svg"
import ProjectCard from "../components/projects/ProjectCard.tsx";
import ProjectsWrapper from "../components/wrappers/ProjectsWrapper.tsx";
import ProjectContentWrapper from "../components/wrappers/ProjectContentWrapper.tsx";
import PROJECTS from "../../dummy-data/data.json"
import SideCategories from "../components/projects/SideCategories.tsx";

const Projects = () => {
    const category = [
        {'Company Scale Project': CompanyIcon},
        {'Side Project': SideIcon},
        {'Small Project': SmallIcon},
        {'UI/UX Figma': FigmaIcon},
        {'React': ReactIcon},
        {'Tailwind': TailwindIcon},
        {'AI/Machine Learning': AIIcon},
        {'Java': PHPIcon},
        {'Unity': UnityIcon},
        {'Django': DjangoIcon},
        {'REST API': RESTAPIIcon},
    ]
    const [isChecked, setIsChecked] = useState(Array(category.length).fill(false))
    const [selectedCategories, setSelectedCategories] = useState([]);

    const filteredData = PROJECTS.projects.filter((item) => {
        if (selectedCategories.length === 0) {
            return true;
        }
        return selectedCategories.every((cat) => item.categories.includes(cat));
    });
    return (
        <ProjectsWrapper>
            <SideCategories categories={category} isChecked={isChecked} setIsChecked={setIsChecked}
                            currentCheck={selectedCategories} setCurrentCheck={setSelectedCategories}/>
            <ProjectContentWrapper>
                {filteredData.map((project, index) => (
                    <ProjectCard categories={category} key={index} project={project} index={index}
                    />
                ))}
            </ProjectContentWrapper>
        </ProjectsWrapper>
    )
}

export default Projects