const HobbiesInfo = ({isOpen}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_3040_1601)">
                <path className={`group-hover:fill-[#607B96] transition duration-100 ${isOpen ? "fill-[#607B96] animate-bounce" : "animate-pulse"}`}
                    d="M17 4C18.5913 4 20.1174 4.63214 21.2426 5.75736C22.3679 6.88258 23 8.4087 23 10V14C23 15.5913 22.3679 17.1174 21.2426 18.2426C20.1174 19.3679 18.5913 20 17 20H7C5.4087 20 3.88258 19.3679 2.75736 18.2426C1.63214 17.1174 1 15.5913 1 14V10C1 8.4087 1.63214 6.88258 2.75736 5.75736C3.88258 4.63214 5.4087 4 7 4H17ZM10 9H8V11H6V13H7.999L8 15H10L9.999 13H12V11H10V9ZM18 13H16V15H18V13ZM16 9H14V11H16V9Z"
                    fill="#273E53"/>
            </g>
            <defs>
                <clipPath id="clip0_3040_1601">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>


    )
}

export default HobbiesInfo