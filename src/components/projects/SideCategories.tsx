import {useEffect, useState} from "react";

import TitleCardDownIcon from "../icons/TitleCardDownIcon.tsx";
import {IProjectCategories} from "../../types/dummyData.ts";
import FilterItem from "./FilterItem.tsx";

interface ISideCategoriesProps {
    categories: IProjectCategories[];
    isCheckedList: boolean[];
    setIsCheckedList: (isCheckedList: boolean[]) => void;
    currentCategory: string[];
    setCurrentCategory: (currentCategory: string[]) => void;
}

const SideCategories = ({
                            categories,
                            isCheckedList,
                            setIsCheckedList,
                            currentCategory,
                            setCurrentCategory
                        }: ISideCategoriesProps) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleClicked = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        console.log(currentCategory)
    }, [currentCategory]);

    const handleChecked = (i: number) => {
        let newCheck = isCheckedList.slice();
        console.log(categories[i].name)
        newCheck[i] = !isCheckedList[i]
        setIsCheckedList(newCheck)
        if (newCheck[i]) {
            setCurrentCategory([categories[i].name, ...currentCategory])
        } else {
            setCurrentCategory(currentCategory.filter(check => check !== categories[i].name))
        }

    }
    return (
        <>
            {/*<div className="w-full  lg:h-full flex flex-col border-r border-lines"></div>*/}
            <div className="w-full h-full xl:w-4/12 lg:w-3/12 border-r border-lines">
                <button className={`w-full h-[35px] border-b border-lines
                            flex flex-row pl-4 items-center gap-2`} onClick={handleClicked}>
                    <TitleCardDownIcon className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`}/>
                    <div className="text-gray-50 text-[13px]">projects</div>
                </button>
                <div className={`${isOpen ? "" : "hidden"} transition duration-100 text-[13px] text-[#273E53]`}>
                    {categories.map((category: IProjectCategories, index: number) => (
                        <FilterItem title={category.name} icon={category.icon}
                                    onCheck={() => handleChecked(index)} isChecked={isCheckedList[index]}
                                    key={category.name}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SideCategories