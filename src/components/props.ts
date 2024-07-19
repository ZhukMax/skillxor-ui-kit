import {PropsWithChildren} from "react";
import {AdditionalStyles, BaseStyles} from "../styles";

export interface BaseProps extends PropsWithChildren {
  className?: string;
}

export interface StyledComponentProps extends BaseProps {
  mStyle?: BaseStyles;
  xStyle?: AdditionalStyles;
}
