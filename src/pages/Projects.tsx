import {useState} from "react";
import ProjectCard from "../components/projects/ProjectCard.tsx";
import ProjectsWrapper from "../components/wrappers/ProjectsWrapper.tsx";
import ProjectContentWrapper from "../components/wrappers/ProjectContentWrapper.tsx";
import PROJECTS from "../../dummy-data/data.json"
import SideCategories from "../components/projects/SideCategories.tsx";
import {IProjectCategories} from "../types/dummyData.ts";

const Projects = () => {
    const categories: IProjectCategories[] = PROJECTS.categories
    const [isCheckedList, setIsCheckedList] = useState<boolean[]>(Array(categories.length).fill(false))
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const filteredData = PROJECTS.projects.filter((project) => {
        if (selectedCategories.length === 0) {
            return true;
        }
        return selectedCategories.every((selectedCategory) => project.categories.includes(selectedCategory));
    });
    return (
        <ProjectsWrapper>
            <SideCategories categories={categories} isCheckedList={isCheckedList} setIsCheckedList={setIsCheckedList}
                            currentCategory={selectedCategories} setCurrentCategory={setSelectedCategories}/>
            <ProjectContentWrapper>
                {selectedCategories.length ? filteredData.reverse().map((project, index) => (
                    <ProjectCard categories={categories} key={index} project={project}
                    />
                )) : filteredData.map((project, index) => (
                    <ProjectCard categories={categories} key={index} project={project}
                    />
                ))}
            </ProjectContentWrapper>
        </ProjectsWrapper>
    )
}

export default Projects