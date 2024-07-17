import {PropsWithChildren} from "react";
import {AdditionalStyles, BaseStyles} from "../styles";

export interface Props extends PropsWithChildren {
  bs?: BaseStyles;
  xs?: AdditionalStyles;
}
