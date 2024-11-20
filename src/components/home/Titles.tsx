import TitlesWrapper from "../wrappers/TitlesWrapper.tsx";
import Text from "../shared/Text.tsx";
import {TypeAnimation} from "react-type-animation";

const Titles = () => {
    return (
        <TitlesWrapper>
            <Text variant="subheadline" cn="text-secondary-white animate-bounce" text="Hi all. I am"/>
            <Text text="Christian Dataro" variant="" cn="text-headline text-secondary-white"/>
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    '> UI/UX Designer',
                    1000,
                    '> Front-End Developer',
                    1000,
                    '> Full-Stack Developer',
                    1000,
                    '> Software Engineer',
                    1000,
                ]}
                speed={50}
                className="text-secondary-blue-violet text-subheadline"
                repeat={Infinity}
            />
        </TitlesWrapper>
    )
}

export default Titles;