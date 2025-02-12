import React from "react";

export type prop = {
    color?: string;
    height?: number;
    width?: number;
    class?: string;
};

const PlanetFog = (prop: prop) => {
    return (
        <svg
            width={`${prop.width}` || "896"}
            height={`${prop.height}` || "838"}
            viewBox={`0 0 ${prop.height || "896"} ${prop.width || "838"} `}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={prop.class || ""}
        >
            <g filter="url(#filter0_f_59_123)">
                <path
                    d="M-20.174 60.3789C-14.3692 93.5129 49.1154 90.9986 41.7618 123.862C36.8039 146.019 -2.02043 164.851 -2.02043 164.851V368.797L12.3957 689.211L-2.02043 888.158C-2.02043 888.158 97.2639 890.053 160.828 888.158C233.942 885.978 276.101 890.176 347.703 876.161C404.372 865.068 437.978 859.369 488.66 833.172C536.156 808.623 564.513 792.21 596.514 751.194C629.91 708.391 630.979 674.85 647.771 624.228C675.048 542.001 693.809 494.377 695.291 408.286C696.634 330.274 699.839 280.695 662.721 210.839C622.859 135.819 571.327 110.164 499.339 60.3789C440.364 19.5929 406.604 -7.01751 336.491 -27.0977C244.173 -53.5371 176.195 -66.4431 89.2815 -27.0977C38.6845 -4.1927 -29.2705 8.45642 -20.174 60.3789Z"
                    fill={prop.color || "#326B8F"}
                    fill-opacity="0.5"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_59_123"
                    x="-221"
                    y="-252"
                    width="1117"
                    height="1341"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_59_123" />
                </filter>
            </defs>
        </svg>
    );
};

export default PlanetFog;
