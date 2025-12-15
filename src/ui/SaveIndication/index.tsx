import type { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  label: string;
  isSave: boolean;
  className?: string;
}

export const SaveIndicationText: FC<Props> = ({ className, label, isSave }) => {
  return <div className={cn(styles.block, className)}>{label}{!isSave && <div className={styles.dot} />}</div>
};
