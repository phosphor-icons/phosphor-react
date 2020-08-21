/* GENERATED FILE */
import React, { forwardRef, useContext } from "react";
import { IconProps, IconContext } from "../lib";

const renderPathFor = (weight: string, color: string): JSX.Element | null => {
  switch (weight) {
    case "bold":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"/>
  <circle cx="128" cy="24" r="18"/>
  <circle cx="54.46089" cy="54.46089" r="18"/>
  <circle cx="24" cy="128" r="18"/>
  <circle cx="54.46089" cy="201.53911" r="18"/>
  <circle cx="128" cy="232" r="18"/>
  <circle cx="201.53911" cy="201.53911" r="18"/>
  <circle cx="232" cy="128" r="18"/>
  <circle cx="201.53911" cy="54.46089" r="18"/>

</>)
    case "duotone":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="64" opacity="0.2"/>
  <circle cx="128" cy="128" r="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="24" r="12"/>
  <circle cx="54.46089" cy="54.46089" r="12"/>
  <circle cx="24" cy="128" r="12"/>
  <circle cx="54.46089" cy="201.53911" r="12"/>
  <circle cx="128" cy="232" r="12"/>
  <circle cx="201.53911" cy="201.53911" r="12"/>
  <circle cx="232" cy="128" r="12"/>
  <circle cx="201.53911" cy="54.46089" r="12"/>

</>)
    case "fill":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <g>
    <circle cx="128" cy="128" r="72"/>
    <circle cx="128" cy="24" r="12"/>
    <circle cx="54.46088" cy="54.46094" r="12.00006"/>
    <circle cx="24" cy="128" r="12"/>
    <circle cx="54.46088" cy="201.53906" r="12.00006"/>
    <circle cx="128" cy="232" r="12"/>
    <circle cx="201.53912" cy="201.53906" r="12.00006"/>
    <circle cx="232" cy="128" r="12"/>
    <circle cx="201.53912" cy="54.46094" r="12.00006"/>
  </g>

</>)
    case "light":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"/>
  <circle cx="128" cy="24" r="9"/>
  <circle cx="54.46089" cy="54.46089" r="9"/>
  <circle cx="24" cy="128" r="9"/>
  <circle cx="54.46089" cy="201.53911" r="9"/>
  <circle cx="128" cy="232" r="9"/>
  <circle cx="201.53911" cy="201.53911" r="9"/>
  <circle cx="232" cy="128" r="9"/>
  <circle cx="201.53911" cy="54.46089" r="9"/>

</>)
    case "thin":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/>
  <circle cx="128" cy="24" r="6"/>
  <circle cx="54.46089" cy="54.46089" r="6"/>
  <circle cx="24" cy="128" r="6"/>
  <circle cx="54.46089" cy="201.53911" r="6"/>
  <circle cx="128" cy="232" r="6"/>
  <circle cx="201.53911" cy="201.53911" r="6"/>
  <circle cx="232" cy="128" r="6"/>
  <circle cx="201.53911" cy="54.46089" r="6"/>

</>)
    case "regular":
      return (<>
  <rect width="256" height="256" fill="none"/>
  <circle cx="128" cy="128" r="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="24" r="12"/>
  <circle cx="54.46089" cy="54.46089" r="12"/>
  <circle cx="24" cy="128" r="12"/>
  <circle cx="54.46089" cy="201.53911" r="12"/>
  <circle cx="128" cy="232" r="12"/>
  <circle cx="201.53911" cy="201.53911" r="12"/>
  <circle cx="232" cy="128" r="12"/>
  <circle cx="201.53911" cy="54.46089" r="12"/>

</>)
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const SunDots = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color, size, weight, mirrored, ...rest } = props;
    const {
      color: contextColor,
      size: contextSize,
      weight: contextWeight,
      mirrored: contextMirrored,
      ...contextRest
    } = useContext(IconContext);

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size ?? contextSize}
        height={size ?? contextSize}
        fill={color ?? contextColor}
        viewBox="0 0 256 256"
        transform={mirrored || contextMirrored ? "scale(-1, 1)" : undefined}
        {...contextRest}
        {...rest}
      >
        {renderPathFor(weight ?? contextWeight, color ?? contextColor)}
      </svg>
    );
  }
);

SunDots.displayName = "SunDots";

export default SunDots;