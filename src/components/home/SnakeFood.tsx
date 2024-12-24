import {ComponentProps} from "react";

type SnakeFoodProps = ComponentProps<'svg'> & {}

const SnakesFood = ({...props}: SnakeFoodProps) => {

    return (
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <ellipse opacity="0.1" cx="7.60322" cy="8.41102" rx="7.33369" ry="7.92412" fill="#43D9AD"/>
            <ellipse opacity="0.2" cx="7.60283" cy="8.41102" rx="5.20708" ry="5.6263" fill="#43D9AD"/>
            <ellipse cx="7.60307" cy="8.41102" rx="2.83549" ry="3.06377" fill="#43D9AD"/>
        </svg>

    )
}

export default SnakesFood