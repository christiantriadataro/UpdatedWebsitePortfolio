import {NavLink} from "react-router-dom";

const HeaderLink = ({text, to}) => {
    return (
        <NavLink to={to} className={({isActive}) =>
            `h-[56px] border-l border-[#1E2D3D] lg:w-[150px] flex justify-center items-center group hover:bg-gray-800 border-b-2  ${isActive ? "text-[#FEA55F] lg:border-b-[#FEA55F] font-[600] lg:text-gray-300 " : "text-gray-300 border-b-[#1E2D3D]"}`
        }>
            <div>{text}</div>
        </NavLink>
    )
}


export default HeaderLink