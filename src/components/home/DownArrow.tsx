import {ComponentProps} from "react";

type DownArrowProps = ComponentProps<'svg'> & {}

const DownArrow = ({...props}: DownArrowProps) => {
    return (
        <svg width="35" height="22" viewBox="0 0 35 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect x="34.4558" y="21.4698" width="33.7905" height="20.9758" rx="7.5"
                  transform="rotate(-180 34.4558 21.4698)" fill="#010C15" stroke="#1E2D3D"/>
            <path d="M17.5608 13.2797L14.5481 8.68406L20.5735 8.68406L17.5608 13.2797Z" fill="white"/>
        </svg>

    )
}

export default DownArrow