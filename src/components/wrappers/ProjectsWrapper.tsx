import {ReactNode} from "react";

const ProjectsWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div className="h-full w-full flex flex-row">{children}</div>
    )
}

export default ProjectsWrapper