import {ComponentProps} from "react";

type BlurProps = ComponentProps<'img'> & {}

const Blur = ({...props}: BlurProps) => {
    return (
        <img {...props} alt=""/>
    )
}

export default Blur