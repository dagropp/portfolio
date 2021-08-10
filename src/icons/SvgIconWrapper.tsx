import React, {HTMLProps, MouseEventHandler} from "react";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  viewBox: string;
  className?: string;
  title?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  color?: string;
}

const SvgIconWrapper: React.FC<ContainerProps> = (props) => {

  const {viewBox, children, className = "", title, onClick, color, ...rest} = props;

  return (
    <div
      className={`icon-wrapper ${className}`}
      onClick={onClick}
      data-title={title}
      {...rest}
    >
      <svg
        viewBox={viewBox}
        fill={color}
      >
        {children}
      </svg>
    </div>
  )
}

export default SvgIconWrapper;