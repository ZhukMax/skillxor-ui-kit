import React from 'react';

import './index.scss';
import {StyledComponentProps} from "../props";
import {BaseStyles} from "../../styles";
import classes from "../classes";

export interface SxBadgeProps extends StyledComponentProps {
  label?: string;
  onClick?: () => void;
}

const SxBadge = (sxBadgeProps: SxBadgeProps) => {
  const {
    mStyle = BaseStyles.primary,
    xStyle,
    className,
    label,
    ...props
  } = sxBadgeProps;

  const classNameString = classes('badge', mStyle, xStyle, className);

  return (
    <span className={classNameString} {...props}>{label}</span>
  )
}

export default SxBadge
