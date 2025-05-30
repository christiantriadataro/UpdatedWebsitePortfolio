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
      <div className="w-full h-full flex flex-col">
        <div className=" w-full border-b border-lines text-sm text-secondary-blue">
          {selectedCategories.length > 0 ? (
            <div className="border-r py-1 lg:py-[7px] flex items-center w-fit px-3 border-lines h-full">
              {selectedCategories.map((category) => `${category};`)}
            </div>
          ) : (
            <div className="my-9">
              {selectedCategories.map((category) => `${category};`)}
            </div>
          )}
        </div>
        <div className="py-8 max-md:px-16 lg:px-4 gap-y-5 gap-x-5 flex flex-wrap justify-center md:overflow-y-auto">
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
    </div>
  );
};

export default Projects;
