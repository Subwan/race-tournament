import type { FC } from 'react';
import { Table } from '@ui';

import { getTableBody, getTableHead } from './utils';

import type { ResultsProps } from './types';

import styles from './styles.module.scss';

export const Results: FC<ResultsProps> = ({ tournament }) => {
  if (!tournament) {
    return (
      <div className={styles.block}>
        Tournament is empty
      </div>
    );
  }

  return (
    <div className={styles.block}>
      <Table
        head={getTableHead(tournament)}
        body={getTableBody(tournament)}
      />
    </div>
  )
};
