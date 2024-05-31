import ReactSVG from "../../assets/icons/react.svg"
const CategoryIcon = (props) => {
    return (
        <>
            <div className="w-5 h-5 flex justify-center items-center animate-bounce bg-[#86E1F9]">
                <img src={props.src} className="w-3 h-3 *:fill-[#000000]" alt=""/>
            </div>
            </>
    )
}

export default CategoryIcon