import { motion } from "framer-motion";
import { useState } from "react";
export const Logo = () => {
  const [isHover, setHover] = useState(false);
  return (
    <motion.svg
      width="392"
      height="552"
      viewBox="0 0 392 552"
      fill="none"
      className=".button-transition"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="392" height="552" fill="#E7E7E7" />
      <g clipPath="url(#clip0_0_1)">
        <rect
          width="392"
          height="727"
          transform="translate(0 -60)"
          fill="white"
        />
        <motion.g clipPath="url(#clip1_0_1)">
          <path
            d="M287.423 53.1015C337.448 69.6764 357.473 89.6778 369.725 128.169C375.801 165.702 374.354 176.128 357.29 204.874C340.225 233.62 350.297 211.694 299.329 259.121C269.807 307.096 269.888 268.541 235.151 339.467C200.414 410.393 124.69 362.937 126.928 321.699C148.254 256.746 264.956 245.509 211.913 167.501C165.588 128.962 55.5177 223.559 36.9894 174.891C22.2437 139.136 12.2945 91.2946 48.3408 66.7639C84.3871 42.2332 129.24 17.6309 164.251 35.9665C199.262 54.3021 239.335 3.29624 287.423 53.1015V53.1015Z"
            fill="#7939EF"
          />
          <motion.path
            animate={{ scale: isHover ? 1.2 : 1 }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer"
            d="M129.643 472.23C120.839 442.988 145.014 415.431 172.383 418.513C199.753 421.596 222.811 443.345 224.727 462.925C226.644 482.504 206.659 512.509 181.797 514.695C156.934 516.881 132.54 496.014 129.643 472.23Z"
            fill="#7939EF"
          />
          <g
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="cursor-pointer"
            filter="url(#filter0_i_0_1)"
          >
            <text
              transform="translate(117 448)"
              fill="white"
              fontFamily="Poppins"
              fontSize="28"
              fontWeight="bold"
              letterSpacing="0em"
            >
              <tspan x="27.1837" y="23.8">
                play
              </tspan>
            </text>
          </g>
        </motion.g>
        <g filter="url(#filter1_i_0_1)">
          <text
            transform="translate(97.9412 50.394) rotate(8.6892)"
            fill="white"
            fontFamily="Gluten"
            fontSize="100"
            fontWeight="500"
            letterSpacing="0em"
          >
            <tspan x="13.3019" y="70.375">
              triv
            </tspan>
          </text>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_0_1"
          x="145.92"
          y="451.28"
          width="62.2256"
          height="32.168"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.2125 0 0 0 0 0.211615 0 0 0 0 0.211615 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <filter
          id="filter1_i_0_1"
          x="102.203"
          y="59.0206"
          width="207.299"
          height="100.558"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <clipPath id="clip0_0_1">
          <rect
            width="392"
            height="727"
            fill="white"
            transform="translate(0 -60)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="520.602"
            height="503.687"
            fill="white"
            transform="translate(-84 50.7081) rotate(-5.58964)"
          />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
