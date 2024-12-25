import CategoryIcon from "../icons/CategoryIcon.tsx";

import LinkIcon from "../icons/LinkIcon.tsx";
import FigmaIconComponent from "../icons/FigmaIconComponent.tsx";
import GithubIconComponent from "../icons/GithubIconComponent.tsx";
import { IProject, IProjectCategories } from "../../types/dummyData.ts";
import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface IProjectCardProps {
  project: IProject;
  categories: IProjectCategories[];
}

const ProjectCardWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full lg:w-72">{children}</div>;
};

const ProjectTitle = ({ title }: { title: string }) => {
  return (
    <div className=" text-secondary-blue font-bold text-[12px] lg:text-[11px] truncate">
      // project-{title.split(" ").join("-").toLowerCase()}
    </div>
  );
};

const ProjectImageWrapper = ({
  image,
  children,
}: {
  image: string;
  children: ReactNode;
}) => (
  <div
    className="w-full h-2/6 py-2 bg-cover bg-center rounded-t-lg"
    style={{ backgroundImage: `url(${image})` }}
  >
    {children}
  </div>
);

const ProjectIconListWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full h-1/2 flex justify-end gap-1 items-center px-3">
    {children}
  </div>
);

const ProjectImageContent = ({
  project,
  categories,
}: {
  project: IProject;
  categories: IProjectCategories[];
}) => {
  return (
    <ProjectImageWrapper image={project.image}>
      <ProjectIconListWrapper>
        <ProjectIconList project={project} categories={categories} />
      </ProjectIconListWrapper>
    </ProjectImageWrapper>
  );
};

const ProjectIconList = ({
  project,
  categories,
}: {
  project: IProject;
  categories: IProjectCategories[];
}) =>
  project.categories.map((_category, index) => (
    <CategoryIcon key={index} src={categories[index].icon} />
  ));

const ProjectContentWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full lg:w-72 h-[250px] border border-lines rounded-lg ">
    {children}
  </div>
);

// const Project

const ProjectCard = ({ project, categories }: IProjectCardProps) => {
  // TODO: Turn the Other Technologies -> Project Tech Stack:
  return (
    <ProjectCardWrapper>
      <ProjectTitle title={project.name} />
      <ProjectContentWrapper>
        <ProjectImageContent project={project} categories={categories} />
        <div className="w-full h-4/6 text-secondary-blue text-[10px] px-3 pb-4 no-scrollbar overflow-y-auto">
          <div className="sticky top-0 flex justify-between  pt-2 bg-[#011627]">
            <Link
              to="/not-found"
              className="flex gap-2 items-center px-1 py-2 group hover:bg-gray-800"
            >
              <div>
                <LinkIcon className="group-hover:fill-accent-green" />
              </div>
              <div className="group-hover:font-bold group-hover:text-accent-green">
                live-preview
              </div>
            </Link>
            <Link
              to="/not-found"
              className="group flex gap-2 py-2 px-1 items-center hover:bg-gray-800"
            >
              <div>
                <FigmaIconComponent className="group-hover:fill-secondary-blue-violet" />
              </div>
              <div className="group-hover:font-bold group-hover:text-secondary-blue-violet">
                figma
              </div>
            </Link>
            <Link
              to="/not-found"
              className="group flex gap-2 py-2 px-1 items-center hover:bg-gray-800"
            >
              <div>
                <GithubIconComponent className="group-hover:fill-accent-orange" />
              </div>
              <div className="group-hover:font-bold group-hover:text-accent-orange">
                view-code
              </div>
            </Link>
          </div>
          {project["description"].map((phrase, index) => (
            <div key={index}>
              <span>- {phrase}</span>
              <br />
            </div>
          ))}
        </div>
      </ProjectContentWrapper>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
