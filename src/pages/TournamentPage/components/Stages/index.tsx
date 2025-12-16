import type { FC } from 'react';

import { StageSwitcher } from './StageSwitcher';

import type { StagesProps } from './types';

import styles from './styles.module.scss';

export const Stages: FC<StagesProps> = ({ tournament, addToTournament }) => {

  return (
    <div className={styles.block}><StageSwitcher tournament={tournament} addToTournament={addToTournament} /></div>
  );
};
