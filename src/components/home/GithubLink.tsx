import Text from "../shared/Text.tsx";

const GithubLink = () => {
    return (
        // TODO: add the links into JSON or ENV
        <div className="github-link-wrapper">
            <Text text="const" variant="code-snippet" cn="text-secondary-blue-violet"/>
            <Text text="githubLink" variant="code-snippet" cn="text-accent-green"/>=
            <Text text={`"https://github.com/christiantriadataro/"`} variant="code-snippet"
                  cn="text-accent-orange"/>
        </div>
    )
}

export default GithubLink;