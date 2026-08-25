import React from 'react';

interface JmoLogoProps {
  size?: number | string;
  className?: string;
  withGlow?: boolean;
}

export const JmoLogo: React.FC<JmoLogoProps> = ({
  size = 40,
  className = '',
  withGlow = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {withGlow && (
        <div className="absolute inset-0 bg-[#C08A2E]/25 blur-md rounded-2xl transform scale-105 pointer-events-none" />
      )}
      <svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Metallic Gold Outer Bevel Gradient */}
          <linearGradient id="goldRimGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#F9E2A8" />
            <stop offset="20%" stopColor="#DFB254" />
            <stop offset="45%" stopColor="#9C6B1C" />
            <stop offset="70%" stopColor="#E6C26E" />
            <stop offset="90%" stopColor="#B8852B" />
            <stop offset="100%" stopColor="#5E3808" />
          </linearGradient>

          {/* Inner Rim Highlight Gradient */}
          <linearGradient id="goldInnerRim" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFEAB3" />
            <stop offset="40%" stopColor="#C89736" />
            <stop offset="80%" stopColor="#7E4D0C" />
            <stop offset="100%" stopColor="#E0BD62" />
          </linearGradient>

          {/* Deep Forest Green Base Gradient */}
          <radialGradient id="greenBg" cx="40%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#253D30" />
            <stop offset="60%" stopColor="#1B2E24" />
            <stop offset="100%" stopColor="#13211A" />
          </radialGradient>

          {/* Red 3D Sphere Dot Gradient */}
          <radialGradient id="redDotGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FF7A6E" />
            <stop offset="45%" stopColor="#D9382F" />
            <stop offset="85%" stopColor="#A82019" />
            <stop offset="100%" stopColor="#5C0D08" />
          </radialGradient>

          {/* Red 3D Cylinder Line Gradient */}
          <linearGradient id="redLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7569" />
            <stop offset="25%" stopColor="#E64036" />
            <stop offset="70%" stopColor="#BA2720" />
            <stop offset="100%" stopColor="#630E0A" />
          </linearGradient>

          {/* Ivory Letter J Gradient & Texture */}
          <linearGradient id="ivoryJGrad" x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#F7F1E1" />
            <stop offset="70%" stopColor="#EAE1CD" />
            <stop offset="100%" stopColor="#D2C5AB" />
          </linearGradient>

          {/* Realistic 3D Drop Shadow for Letter and Pin */}
          <filter id="elementShadow" x="-15%" y="-15%" width="140%" height="140%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.65" />
          </filter>

          {/* Frame Drop Shadow */}
          <filter id="frameShadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Gold Squircle Frame */}
        <rect
          x="14"
          y="14"
          width="484"
          height="484"
          rx="102"
          fill="url(#goldRimGrad)"
          filter="url(#frameShadow)"
        />

        {/* Outer Dark Gap */}
        <rect
          x="22"
          y="22"
          width="468"
          height="468"
          rx="94"
          fill="#0E1A14"
        />

        {/* Inner Gold Thin Bevel & Forest Green Body */}
        <rect
          x="26"
          y="26"
          width="460"
          height="460"
          rx="90"
          stroke="url(#goldInnerRim)"
          strokeWidth="3.5"
          fill="url(#greenBg)"
        />

        {/* LEFT ELEMENT: Red Pin & Line */}
        <g filter="url(#elementShadow)">
          {/* Top Red Sphere Dot */}
          <circle
            cx="187"
            cy="114"
            r="8.5"
            fill="url(#redDotGrad)"
          />
          {/* Dot Top Highlight */}
          <circle
            cx="184.5"
            cy="111.5"
            r="2.5"
            fill="#FFFFFF"
            opacity="0.45"
          />

          {/* Vertical Red Cylinder Line */}
          <rect
            x="182.5"
            y="130"
            width="9"
            height="262"
            rx="4.5"
            fill="url(#redLineGrad)"
          />
        </g>

        {/* RIGHT ELEMENT: Classic Serif Italic 'J' */}
        <g filter="url(#elementShadow)">
          <path
            d="M 285 130
               L 384 130
               C 385 136, 384 142, 383 144
               C 375 144, 366 145, 360 148
               C 356 150, 353 155, 350 162
               L 326 248
               L 302 330
               C 290 358, 270 367, 235 367
               C 202 367, 184 354, 184 335
               C 184 322, 194 313, 203 313
               C 212 313, 218 320, 218 328
               C 218 340, 226 348, 242 348
               C 264 348, 280 334, 290 298
               L 316 206
               L 328 162
               C 330 154, 326 149, 318 147
               C 310 145, 297 144, 287 144
               Z"
            fill="url(#ivoryJGrad)"
          />

          {/* Top serif light bevel on letter J */}
          <path
            d="M 285 130 L 384 130 C 380 134, 368 135, 358 138 C 342 143, 332 148, 328 162 Z"
            fill="#FFFFFF"
            opacity="0.3"
          />
        </g>
      </svg>
    </div>
  );
};
