import HomeWrapper from "../wrappers/HomeWrapper.tsx";
import Titles from "./Titles.tsx";
import Descriptions from "./Descriptions.tsx";

const HomeComponent = () => {
    return (
        <HomeWrapper>
            <Titles/>
            <Descriptions/>
        </HomeWrapper>
    )
}


export default HomeComponent