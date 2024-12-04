import {ReactNode} from "react";

const ProjectContentWrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className="max-h-[550px] md:max-h-[580px] lg:gap-x-3 lg:gap-y-3 lg:py-6 lg:max-h-[690px] xl:max-h-[680px] xl:gap-x-4 xl:gap-y-4 h-full w-full flex flex-wrap py-10 justify-center gap-x-7 gap-y-7 overflow-y-auto">{children}</div>
    )
}

export default ProjectContentWrapper