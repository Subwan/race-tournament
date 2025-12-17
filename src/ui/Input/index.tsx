import { type ChangeEvent, type FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type InputProps = {
  value: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ value, className, onChange }) => {
  return <input className={cn(styles.input, className)} value={value} onChange={onChange} />;
};
