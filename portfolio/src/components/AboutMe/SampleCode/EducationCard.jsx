import Avatar from "./Avatar.jsx";
import DetailIcon from "../DetailIcon.jsx";
import StarIcon from "../StarIcon.jsx";
import InputCode from "./InputCode.jsx";
import avatarImage2 from "../../../assets/image/avatar-image2.png"
import InputExperience from "./InputExperience.jsx";
import AvatarExperience from "./AvatarExperience.jsx";
const ExperienceCard = ({job}) => {
    return (
        <div className=" lg:w-[431px] flex flex-col gap-4">
            <div className="h-[43px] w-full flex gap-2">
                <div className="m-auto ml-1">
                    <AvatarExperience src={job['avatar']} className="w-14 h-12 object-contain rounded-full" />
                </div>
                <div className="mt-2 w-full">
                    <div className="flex flex-row justify-between text-xs">
                        <div className=" text-[#3A49A4] font-bold">{job['company']}</div>
                        <div className="text-[11px]">{job['place']}</div>
                    </div>
                    <div className="flex flex-row justify-between text-xs">
                        <div className="text-[11px]">{job['course']}</div>
                    </div>
                </div>
            </div>
            {/*<InputExperience description={job['description']} />*/}
        </div>
    )
}

export default ExperienceCard