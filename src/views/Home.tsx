import { TypeAnimation } from "react-type-animation";
import {
  HOME_COMMENT,
  HOME_GITHUB_LINK,
  HOME_INTRO,
  HOME_NAME,
  HOME_ROLES,
} from "../constants/env.ts";

const Home = () => {
  const words = `const githubLink = “${HOME_GITHUB_LINK}”`.split(" ");
  const wordColor = [
    "secondary-blue-violet",
    "accent-green",
    "secondary-white",
    "accent-orange",
    "accent-orange",
  ];
  const roles = HOME_ROLES.reduce<(string | number)[]>((arr, role) => {
    arr.push(role, 1000);
    return arr;
  }, []);

  return (
    <div className="z-20 flex flex-col justify-around h-full pl-7">
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
      <div className="flex flex-col gap-2">
        <div className="text-code-snippet-lg text-secondary-blue">
          {HOME_COMMENT}
        </div>
        <div className="text-code-snippet-lg font-medium">
          {words.map((word, index) => (
            <span key={index} className={`text-${wordColor[index]}`}>
              {" "}
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="z-10 absolute top-1/4 right-1/4 blur-3xl  w-72 h-28 bg-gradient-green rotate-45"></div>
      <div className="z-10 absolute top-2/4 left-1/4 blur-3xl w-72 h-28 bg-gradient-blue -rotate-45"></div>
    </div>
  );
};

export default Home;
