import React, {FC} from "react";
import {StyledComponentProps} from "../props";
import {BaseStyles} from "../../styles";

import './index.scss';

export interface SxAlertProps extends StyledComponentProps {
  onClick?: () => void;
}

const SxAlert: FC<SxAlertProps> = (sxAlertProps) => {
  const {
    mStyle = BaseStyles.primary,
    xStyle,
    className,
    children,
    ...props
  } = sxAlertProps;

  const rootClasses = ["sx-alert"];
  if (xStyle !== undefined)
    rootClasses.push(`sx-${mStyle}-${xStyle}-alert`);
  else
    rootClasses.push(`sx-${mStyle}-alert`);

  if (className !== undefined) {
    const classes = className.split(" ");
    classes.forEach(
      (localClassName) => rootClasses.push(`${localClassName}`)
    )
  }

  return (
    <div className={rootClasses.join(" ")} {...props} role="alert">
      {children}
    </div>
  )
}
export default SxAlert;
