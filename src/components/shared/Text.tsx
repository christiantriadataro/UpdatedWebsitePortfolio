import {ReactNode} from "react";

const Text = ({text, variant, cn}: { text: string | ReactNode, variant: string, cn: string }) => {
    const textVariant = `text-${variant}`
    return (
        <div className={`${textVariant} ${cn}`}>{text}</div>
    )
}

export default Text