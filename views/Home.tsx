import {TypeAnimation} from "react-type-animation";

const Home = () => {
    return (
        <div className="h-full w-full">
            <div className="text-secondary-white text-subheadline">Hi all, I am</div>
            <div className="text-secondary-white text-headline">Christian Dataro</div>
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
                className="text-accent-green text-subheadline"
                repeat={Infinity}
            />
        </div>
    )
}

export default Home