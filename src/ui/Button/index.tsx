import { type ButtonHTMLAttributes, type DetailedHTMLProps, type FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  className?: string;
}

export const Button: FC<ButtonProps>= ({ className, ...props}) => {
  return <button className={cn(styles.button, className)} {...props} />
};
