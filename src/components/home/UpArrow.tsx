import {ComponentProps} from "react";

type Icon = ComponentProps<'svg'> & {}

const UpArrow = (props: Icon) => {
    return (
        <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="0.66626" y="0.834908" width="33.7905" height="20.9758" rx="7.5" fill="#010C15" stroke="#1E2D3D"/>
            <path d="M17.5613 9.02497L20.574 13.6206H14.5486L17.5613 9.02497Z" fill="white"/>
        </svg>

    )
}

export default UpArrow