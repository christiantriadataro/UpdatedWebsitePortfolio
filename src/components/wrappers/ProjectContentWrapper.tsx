import {ReactNode} from "react";

const ProjectContentWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className="max-h-[780px] w-full flex flex-wrap py-10 justify-center gap-x-7 gap-y-7 overflow-y-auto">{children}</div>
    )
}

export default ProjectContentWrapper