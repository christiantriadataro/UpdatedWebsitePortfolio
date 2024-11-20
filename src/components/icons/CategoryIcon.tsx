type IconProps = {
    src: string;
}

const CategoryIcon = ({src}: IconProps) => {
    return (
        <>
            <div className="w-5 h-5 flex justify-center items-center animate-bounce bg-[#86E1F9]">
                <img src={src} className="w-3 h-3 *:fill-[#000000]" alt=""/>
            </div>
        </>
    )
}


export default CategoryIcon