import TitleCardDownIcon from "../AboutMe/TitleCardDownIcon.jsx";
import CheckBox from "./CheckBox.jsx";
import {useState} from "react";

const SideCategories = ({categories, isChecked, setIsChecked, currentCheck, setCurrentCheck}) => {
// const SideCategories = ({categories}) => {

    const [isOpen, setIsOpen] = useState(true)

    const handleClicked = () => {
        setIsOpen(!isOpen)
    }


    const handleChecked = (i) => {
        let newCheck = isChecked.slice();
        newCheck[i] = !isChecked[i]
        setIsChecked(newCheck)
        if (newCheck[i]) {
            // true
            setCurrentCheck([Object.keys(categories[i])[0], ...currentCheck])
        } else {
            // false
            setCurrentCheck(currentCheck.filter(check => check !== Object.keys(categories[i])[0]))
        }

    }
    return (
        <>
            {/*<div className="w-full  lg:h-full flex flex-col border-r border-[#1E2D3D]"></div>*/}
            <div className="w-full xl:w-4/12 lg:3/12 border-r border-[#1E2D3D]">
                <button className={`w-full w-[252px] h-[35px] border-b border-[#1E2D3D]
                            flex flex-row pl-4 items-center gap-2`} onClick={handleClicked}>
                    <TitleCardDownIcon className={`transition duration-100 ${isOpen ? "-rotate-90" : ""}`}/>
                    <div className="text-gray-50 text-[13px]">projects</div>
                </button>
                <div className={`${isOpen ? "" : "hidden"} transition duration-100 text-[13px] text-[#273E53]`}>
                    {categories.map((category, index) => (
                        <CheckBox title={Object.keys(category)[0]} icon={Object.values(category)[0]} onCheck={() => handleChecked(index)} isChecked={isChecked[index]} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SideCategories