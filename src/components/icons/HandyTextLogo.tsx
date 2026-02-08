import React from "react";

const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width || 120}
      height={height || 40}
      className={className}
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="60"
        y="30"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="2"
        className="logo-primary"
        fill="#22c55e"
      >
        Pssst
      </text>
    </svg>
  );
};

export default HandyTextLogo;
