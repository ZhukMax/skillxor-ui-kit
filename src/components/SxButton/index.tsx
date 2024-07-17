import React, {FC} from 'react';
import './index.scss';
import {Props} from "../props";

export interface SxButtonProps extends Props {
}

const SxButton: FC<SxButtonProps> = ({
                                       bs,
                                       xs,
                                       children,
                                       ...props
}) => {
  const rootClasses = ["sx-btn"];
  if (bs !== undefined) {
    if (xs !== undefined)
      rootClasses.push(`sx-${bs}-${xs}-btn`);
    else
      rootClasses.push(`sx-${bs}-btn`);
  } else {
    rootClasses.push("primary-btn");
  }

  return (
    <button {...props} className={rootClasses.join(" ")}>
      {children}
    </button>
  );
};

export default SxButton;
