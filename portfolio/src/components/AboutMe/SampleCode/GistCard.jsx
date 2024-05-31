import Avatar from "./Avatar.jsx";
import DetailIcon from "../DetailIcon.jsx";
import StarIcon from "../StarIcon.jsx";
import InputCode from "./InputCode.jsx";
import avatarImage from "../../../assets/image/avatar-image.png"
import avatarImage2 from "../../../assets/image/avatar-image2.png"
const GistCard = () => {
    return (
        <div className="h-[216px] lg:w-[431px] flex flex-col gap-2">
            <div className="h-[43px] w-full flex gap-2">
                <div className="m-auto ml-1">
                    <Avatar src={avatarImage2}/>
                </div>
                <div className="mt-1 w-full">
                    <div className="flex flex-row justify-between text-xs">
                        <div className=" text-[#3A49A4] font-bold">@christiantriadataro</div>
                        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 gap-y-1.5">
                            <div className="flex justify-center items-center gap-1 gap-x-1">
                                <DetailIcon className="w-4 h-4"/>
                                <div>details</div>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <StarIcon className="w-4 h-4"/>
                                <div>stars</div>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-4 lg:mt-0 text-xs">
                        Created 10 months ago
                    </div>
                </div>
            </div>
            <InputCode/>
        </div>
    )
}

export default GistCard