import React, {FC} from 'react';
import {StyledComponentProps} from "../props";

import './styles/index.scss';
import {BaseStyles} from "../../styles";

export interface SxButtonProps extends StyledComponentProps {
  onClick?: () => void;
}

const SxButton: FC<SxButtonProps> = (sxButtonProps) => {
  const {
    mStyle = BaseStyles.primary,
    xStyle,
    className,
    children,
    ...props
  } = sxButtonProps;

  const rootClasses = ["sx-btn"];
  if (xStyle !== undefined)
    rootClasses.push(`sx-${mStyle}-${xStyle}-btn`);
  else
    rootClasses.push(`sx-${mStyle}-btn`);

  if (className !== undefined) {
    const classes = className.split(" ");
    classes.forEach(
      (localClassName) => rootClasses.push(`sx-btn-${localClassName}`)
    )
  }

  return (
    <button type="button" className={rootClasses.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default SxButton;
