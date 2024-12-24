type IconProps = {
    src: string;
}

const CategoryIcon = ({src}: IconProps) => {
    return (
        <>
            <div className="w-5 h-5 flex justify-center items-center animate-bounce bg-secondary-blue-violet">
                <img src={`${src.slice(0, -4)}-colored.svg`} className="w-3 h-3 " alt=""/>
            </div>
        </>
    )
}


export default CategoryIcon