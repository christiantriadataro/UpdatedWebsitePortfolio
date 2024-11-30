import {ReactNode} from "react";

const ProjectContentWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className="max-h-[550px] md:max-h-[580px] lg:max-h-[690px] xl:max-h-[780px] h-full w-full flex flex-wrap py-10 justify-center gap-x-7 gap-y-7 overflow-y-auto">{children}</div>
    )
}

export default ProjectContentWrapper