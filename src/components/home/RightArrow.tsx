import {ComponentProps} from "react";

type Icon = ComponentProps<'svg'> & {}

const RightArrow = (props: Icon) => {
    return (
        <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="34.353" y="21.4698" width="33.7905" height="20.9758" rx="7.5"
                  transform="rotate(-180 34.353 21.4698)" fill="#010C15" stroke="#1E2D3D"/>
            <path d="M19.5845 10.9819L15.3312 14.2372L15.3312 7.72662L19.5845 10.9819Z" fill="white"/>
        </svg>

    )
}

export default RightArrow