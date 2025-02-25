import React from "react";

interface SvgIconProps {
  name: string;
  width?: number;
  height?: number;
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  width = 24,
  height = 24,
  color = "currentColor",
}) => {
  return (
    <svg width={width} height={height} fill={color}>
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
};

export default SvgIcon;
