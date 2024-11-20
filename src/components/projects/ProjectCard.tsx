import CategoryIcon from "../icons/CategoryIcon.tsx";
import {NavLink} from "react-router-dom";
import LinkIcon from "../icons/LinkIcon.tsx";
import FigmaIconComponent from "../icons/FigmaIconComponent.tsx";
import GithubIconComponent from "../icons/GithubIconComponent.tsx";

const ProjectCard = ({project, index, categories}) => {
    // TODO: Turn the Other Technologies -> Project Tech Stack:
    return (
        <div className="w-full lg:w-72">
            <div className=" text-[#5565E8] font-bold text-[12px] lg:text-[10px] truncate">
                // project-{project['project name'].split(' ').join('-').toLowerCase()}
            </div>
            <div className="w-full lg:w-72 h-[250px] border border-[#1E2D3D] rounded-lg ">
                <div className='w-full h-2/6 py-2  bg-cover bg-center rounded-t-lg
                '
                     style={{backgroundImage: `url(${project.image})`}}>
                    <div className="w-full h-1/2 flex justify-end gap-1 items-center px-3">

                        {
                            project.categories.map((category, index) => {
                                // console.log(category)
                                console.log(categories[index])
                                return <CategoryIcon key={index} src={Object.values(categories[index])}/>
                            })
                        }
                    </div>
                </div>
                <div
                    className="w-full h-4/6  text-[#607B96] text-[10px] px-3 pb-4 no-scrollbar overflow-y-auto">
                    <div className="sticky top-0 flex justify-between  pt-2 bg-[#011627]">
                        <NavLink to="/not-found" className="flex gap-2 items-center px-1 py-2 hover:bg-gray-800">
                            <div><LinkIcon/></div>
                            <div>live-preview</div>
                        </NavLink>
                        <NavLink to="/not-found" className="flex gap-2 py-2 px-1 items-center hover:bg-gray-800">
                            <div><FigmaIconComponent/></div>
                            <div>figma</div>
                        </NavLink>
                        <NavLink to="/not-found" className="flex gap-2 py-2 px-1 items-center hover:bg-gray-800">
                            <div>
                                <GithubIconComponent/>
                            </div>
                            <div>view-code</div>
                        </NavLink>
                    </div>
                    {project['description'].map((phrase, index) => (
                        <div key={index}>
                            <span>- {phrase}</span><br/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard