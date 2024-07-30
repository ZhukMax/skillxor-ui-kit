import {AdditionalStyles, BaseStyles} from "../styles";

export default (root: string, mStyle: BaseStyles, xStyle?: AdditionalStyles, className?: string): string => {
  const rootClasses = ['sx-' + root];

  if (xStyle !== undefined)
    rootClasses.push(`sx-${mStyle}-${xStyle}`);
  else
    rootClasses.push(`sx-${mStyle}`);

  if (className !== undefined) {
    return rootClasses.join(' ').concat(' ', className)
  }

  return rootClasses.join(' ')
}
