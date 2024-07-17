import React, {FC} from 'react';
import './styles/index.scss';
import {StyledComponentProps} from "../props";

export interface SxButtonProps extends StyledComponentProps {}

const SxButton: FC<SxButtonProps> = (sxButtonProps) => {
  const {
    bs,
    xs,
    className,
    children,
    ...props
  } = sxButtonProps;

  const rootClasses = ["sx-btn"];
  if (bs !== undefined) {
    if (xs !== undefined)
      rootClasses.push(`sx-${bs}-${xs}-btn`);
    else
      rootClasses.push(`sx-${bs}-btn`);
  } else {
    rootClasses.push("primary-btn");
  }

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
