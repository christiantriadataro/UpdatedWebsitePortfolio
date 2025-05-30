import { ComponentProps } from "react";

type CheckBoxIconProps = ComponentProps<"svg"> & {
  isClicked: boolean;
};

const CheckBoxIcon = ({ isClicked, ...props }: CheckBoxIconProps) => {
  return (
    <>
      {!isClicked ? (
        <svg
          width="14"
          height="15"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x="0.5"
            y="1.23438"
            width="17.8115"
            height="17.8115"
            rx="1.5"
            fill="#011627"
            stroke="#607B96"
          />
        </svg>
      ) : (
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x="0.5"
            y="1.09424"
            width="17.8115"
            height="17.8115"
            rx="1.5"
            fill="#607B96"
            stroke="#607B96"
          />
          <path
            d="M7.88587 12.2802L14.4718 5.6936L15.4856 6.70671L7.88587 14.3064L3.32617 9.74674L4.33928 8.73364L7.88587 12.2802Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
};

export default CheckBoxIcon;
