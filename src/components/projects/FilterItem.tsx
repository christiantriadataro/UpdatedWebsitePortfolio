import CheckBoxIcon from "../icons/CheckBoxIcon.tsx";
import {MouseEventHandler} from "react";

interface ICheckBoxProps {
    isCheckedList: boolean[];
    onCheck: MouseEventHandler<HTMLButtonElement>
    title: string;
    icon: string;
}

const FilterItem = ({isCheckedList, onCheck, title, icon}: ICheckBoxProps) => {
    return (
        <button className=" py-[6px] w-full pl-4 flex flex-row gap-2 items-center group hover:bg-gray-800"
                onClick={onCheck}>
            <CheckBoxIcon isClicked={isCheckedList.toString()} className="w-3.5 h-3.5"/>
            <img src={icon} alt="" className="h-[24px] w-[24px]"/>
            <div
                className={`group-hover:text-gray-300 ${!isCheckedList ? "text-gray-300" : "text-[#607B96]"}`}>{title.split(' ').join('-').toLowerCase()}</div>
        </button>
    )
}

export default FilterItem