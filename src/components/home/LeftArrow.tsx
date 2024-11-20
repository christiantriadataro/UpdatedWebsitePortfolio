import {ComponentProps} from "react";

type LeftArrowProps = ComponentProps<'svg'> & {}

const LeftArrow = ({...props}: LeftArrowProps) => {
    return (
        <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="34.5598" y="21.4698" width="33.7905" height="20.9758" rx="7.5"
                  transform="rotate(-180 34.5598 21.4698)" fill="#010C15" stroke="#1E2D3D"/>
            <path d="M15.5381 10.9819L19.7913 7.72661L19.7913 14.2371L15.5381 10.9819Z" fill="white"/>
        </svg>

    )
}

export default LeftArrow