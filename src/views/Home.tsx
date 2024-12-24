import { TypeAnimation } from "react-type-animation";
import {
  HOME_COMMENT,
  HOME_INTRO,
  HOME_NAME,
  HOME_ROLES,
} from "../constants/env.ts";

const Home = () => {
  const githubLink = "const githubLink = “https://github.com/example/url”";
  const roles = HOME_ROLES.reduce<(string | number)[]>((arr, role) => {
    arr.push(role, 1000);
    return arr;
  }, []);

  console.log(roles);

  return (
    <div className="flex flex-col justify-around h-full pl-7">
      <div>
        <div className="text-subheadline">{HOME_INTRO}</div>
        <div className="text-headline">{HOME_NAME}</div>
        <TypeAnimation
          sequence={roles}
          speed={50}
          className="text-accent-green text-subheadline"
          repeat={Infinity}
        />
      </div>
      <div>
        <div className="text-code-snippet-lg text-secondary-blue">
          {HOME_COMMENT}
        </div>
        <div className="text-code-snippet-lg font-medium"></div>
      </div>
    </div>
  );
};

export default Home;
