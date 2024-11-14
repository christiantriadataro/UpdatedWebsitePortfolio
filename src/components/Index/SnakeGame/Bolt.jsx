const Bolt = () => {
    return (
        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_di_2986_3782)">
                <ellipse cx="6.63184" cy="7.23123" rx="4.60767" ry="4.97863" fill="url(#paint0_radial_2986_3782)"/>
            </g>
            <path d="M4.6687 8.98882L8.59484 5.47361M4.6687 5.47361L8.59484 8.98882" stroke="#114944"/>
            <defs>
                <filter id="filter0_di_2986_3782" x="0.0241699" y="0.252602" width="17.2153" height="17.9573"
                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2986_3782"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2986_3782" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="1"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.101667 0 0 0 0 0.508333 0 0 0 0 0.466409 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2986_3782"/>
                </filter>
                <radialGradient id="paint0_radial_2986_3782" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(6.63184 4.9334) rotate(90) scale(7.27646 6.73428)">
                    <stop offset="0.151042" stopColor="#196C6A"/>
                    <stop offset="1" stopColor="#114B4A"/>
                </radialGradient>
            </defs>
        </svg>

    )
}

export default Bolt