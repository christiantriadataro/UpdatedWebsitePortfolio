import LinkIcon from "../Projects/Icon/LinkIcon.jsx";
import {Link} from "react-router-dom";

const FindMeComponent = ({text, link}) => {
    return (
        <Link to={link} target="_blank" className="py-[6px] pl-8  flex flex-row gap-2 items-center group hover:bg-gray-800">
            <LinkIcon/>
            <div
                className="text-[14px] lg:text-[12px] text-[#607B96] truncate group-hover:text-gray-50 mr-4">{text}</div>
        </Link>
    )
}

export default FindMeComponent;