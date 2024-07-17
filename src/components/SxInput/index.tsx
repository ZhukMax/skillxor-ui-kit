import React, {FC} from 'react';
import {BaseProps} from "../props";

import './index.scss';

export interface SxInputProps extends BaseProps {
  placeholder?: string;
  label: string;
}

const SxInput: FC<SxInputProps> = (sxInputProps) => {
  const {
    placeholder,
    label,
    ...props
  } = sxInputProps;

  const classes = ['sx-input'];

  return (
    <label>
      {label}
      <input type="text" className={classes.join(' ')} placeholder={placeholder ? placeholder : ''} {...props}/>
    </label>
  );
};

export default SxInput;
