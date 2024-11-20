import DescriptionsWrapper from "../wrappers/DescriptionsWrapper.tsx";
import Text from "../shared/Text.tsx";
import GithubLink from "./GithubLink.tsx";

const Descriptions = () => {
    return (
        <DescriptionsWrapper>
            <Text text="// complete the game to continue" variant="code-snippet"
                  cn="text-secondary-blue text-code-snippet"/>
            <Text text="// you can also see it in my Github page" variant="code-snippet"
                  cn="text-secondary-blue text-code-snippet"/>
            <Text text={<GithubLink/>} cn="font-medium" variant="code-snippet"/>
        </DescriptionsWrapper>
    )
}

export default Descriptions