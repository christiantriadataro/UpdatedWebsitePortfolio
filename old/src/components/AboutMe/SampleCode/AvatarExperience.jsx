import Unodos from "../../../assets/image/unodos.png"

const AvatarExperience = (props) => {
    return (
        <div className="bg-gray-600 rounded-full">
            <img src={props.src} {...props}  alt=""/>
        </div>
    )
}

export default AvatarExperience