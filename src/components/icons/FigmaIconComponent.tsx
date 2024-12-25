import {ComponentProps} from "react";

type FigmaIconProp = ComponentProps<'path'> & {}

const FigmaIconComponent = ({...props}: FigmaIconProp) => {
    return (
        <svg className="w-4 h-4 fill-[#607B96]" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 14"
             id="Figma--Streamline-Core.svg"
             height="14" width="14">
            <g id="figma">
                <path {...props} id="Subtract" fill="#607B96" fillRule="evenodd"
                      d="M4.502 5.06078c-1.06965 0.01645 -1.93169 0.88867 -1.93169 1.96223 0 1.08384 0.87863 1.96247 1.96247 1.96247h1.96246v-3.9247H4.502Zm5.5051 0c1.0611 0.02607 1.9133 0.89445 1.9133 1.96187 0 1.08384 -0.8786 1.96246 -1.96245 1.96246 -1.08384 0 -1.96247 -0.87862 -1.96247 -1.96246 0 -1.06742 0.85221 -1.9358 1.91335 -1.96187h0.09827Zm0.2221 -4.882435c0.934 0 1.6912 0.757184 1.6912 1.691215 0 0.93404 -0.7572 1.69122 -1.6912 1.69122h-0.206c-0.0217 -0.0004 -0.04345 -0.0006 -0.06525 -0.0006s-0.04356 0.0002 -0.06526 0.0006H7.99548V0.178345h2.23372ZM2.57031 1.86956c0 -0.934031 0.75719 -1.691215 1.69122 -1.691215h2.23371V3.56055H4.53278c-0.01365 0 -0.02728 0.00008 -0.04089 0.00023h-0.23036c-0.93403 0 -1.69122 -0.75718 -1.69122 -1.69122Zm1.69122 8.61674c-0.93403 0 -1.69122 0.7572 -1.69122 1.6912 0 0.9341 0.75719 1.6913 1.69122 1.6913h0.27125c1.08384 0 1.96246 -0.8787 1.96246 -1.9625v-1.42H4.26153Z"
                      clipRule="evenodd" strokeWidth="1"></path>
            </g>
        </svg>
    )
}


export default FigmaIconComponent