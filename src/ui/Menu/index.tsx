import type { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type MenuProps = {
  options: {
    label: ReactNode;
    value: string;
  }[];
  onOptionClick: (value: string) => void;
  className?: string;
}

export const Menu: FC<MenuProps> = ({ className, options, onOptionClick }) => {
  const OPTIONS_LIST = options.map(option => (
    <li key={option.value} onClick={() => onOptionClick(option.value)}>{option.label}</li>
  ));

  return <menu className={cn(styles.menu, className)}>{OPTIONS_LIST}</menu>
};