const PersonalInfo = ({isOpen}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clipPath="url(#clip0_3040_1596)">
                <path className={`group-hover:fill-[#607B96] transition duration-100 ${isOpen ? "fill-[#607B96] animate-bounce" : "animate-pulse"}`}
                    d="M5 20H19V22H5V20ZM12 18C9.87827 18 7.84344 17.1571 6.34315 15.6569C4.84285 14.1566 4 12.1217 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 12.1217 19.1571 14.1566 17.6569 15.6569C16.1566 17.1571 14.1217 18 12 18V18Z"
                    fill="#273E53"/>
            </g>
            <defs>
                <clipPath id="clip0_3040_1596">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default PersonalInfo