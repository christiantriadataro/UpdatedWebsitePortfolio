import { useState } from "react";
import data from "../../data/data.json";
import { IProject } from "../types/dummyData.ts";
import ProjectCard from "../components/projects/ProjectCard.tsx";
import SideCategories from "../components/projects/SideCategories.tsx";

interface ICategoryProps {
  id?: number;
  name: string;
  icon: string;
}

const Projects = () => {
  const projects: IProject[] = data["project-page"].projects;
  const categories: ICategoryProps[] = data["project-page"].categories;
  const [isCheckedList, setIsCheckedList] = useState<boolean[]>(
    Array(categories.length).fill(false),
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredData = projects.filter((project) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.every((selectedCategory) =>
      project.categories.includes(selectedCategory),
    );
  });
  return (
    <div className="h-full sm:w-full flex flex-col sm:flex-row">
      <SideCategories
        categories={categories}
        isCheckedList={isCheckedList}
        setIsCheckedList={setIsCheckedList}
        currentCategory={selectedCategories}
        setCurrentCategory={setSelectedCategories}
      />
      <div className="py-8 px-4 gap-y-5 gap-x-5 flex flex-wrap justify-center sm:overflow-y-auto">
        {selectedCategories.length
          ? filteredData
              .reverse()
              .map((project, index) => (
                <ProjectCard
                  categories={categories}
                  key={index}
                  project={project}
                />
              ))
          : filteredData.map((project, index) => (
              <ProjectCard
                categories={categories}
                key={index}
                project={project}
              />
            ))}
      </div>
    </div>
  );
};

export default Projects;
