import type { FC } from 'react';

import { PlayersRecordingTable } from './PlayersRecordingTable';
import { StageSwitcher } from './StageSwitcher';

import type { StagesProps } from './types';

import styles from './styles.module.scss';

export const Stages: FC<StagesProps> = ({ tournament, addToTournament, setTournament }) => {
  return (
    <div className={styles.block}>
      <StageSwitcher tournament={tournament} addToTournament={addToTournament} />
      <PlayersRecordingTable tournament={tournament} setTournament={setTournament} />
    </div>
  );
};
