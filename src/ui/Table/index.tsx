import type { DetailedHTMLProps, FC, TableHTMLAttributes } from 'react'
import cn from 'classnames';

import styles from './styles.module.scss';

export type TableProps = DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>

export const Table: FC<TableProps> = ({ className, ...props}) => {
  return <table className={cn(styles.table, className)} {...props} />
}