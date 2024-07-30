import React, {FC} from 'react';

import './index.scss';
import {StyledComponentProps} from "../props";
import {BaseStyles} from "../../styles";
import classes from "../classes";

export interface SxBadgeProps extends StyledComponentProps {
  label?: string;
  rounded?: boolean;
  indicator?: boolean;
  onClick?: () => void;
}

const SxBadge: FC<SxBadgeProps> = (sxBadgeProps) => {
  const {
    mStyle = BaseStyles.primary,
    xStyle,
    className,
    label,
    indicator,
    rounded,
    ...props
  } = sxBadgeProps;

  const classNameString = classes(
    'badge',
    mStyle,
    xStyle,
    rounded ? className + ' rounded': className
  );

  return (
    <span className={classNameString} {...props}>
      {indicator ? (<span className='sx-badge-indicator'></span>) : ''}
      {label}
    </span>
  )
}

export default SxBadge
