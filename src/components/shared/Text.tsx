import {ReactNode} from "react";

const Text = ({text, variant, cn}: { text: string | ReactNode, variant: string, cn: string }) => {
    // const textVariant = `text-${variant}`
    //           sm   md    lg   xxl md:${textVariant}-md lg:${textVariant}-lg
    const font = variant && `text-${variant}`
    return (
        <div className={`${font} ${cn}`}>{text}</div>
    )
}

export default Text