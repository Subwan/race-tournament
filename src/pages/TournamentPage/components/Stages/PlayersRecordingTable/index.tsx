import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { EMPTY_RACER } from 'constants/defaultValues';
import type { Tournament } from '@types';
import { Table } from '@ui';

import { getTableBody } from './getTableBody';

import type { StagesProps } from '../types';

import styles from './styles.module.scss';

const HEAD = ['Racer', 'Time', ''];

type Props = Pick<StagesProps, 'tournament' | 'setTournament'>;

export const PlayersRecordingTable: FC<Props> = ({ tournament, setTournament }) => {
  const { stageId } = useParams();

  if (!tournament || !stageId) {
    return null;
  }

  const onAddRacer = () => {
    const newTournament = Object.entries(tournament).reduce<Tournament>((accTournament, [currStageId, stage]) => {
      const currentStageLength = Object.keys(stage).length;
      const lastId = Object.keys(stage)[currentStageLength - 1];

      return {
        ...accTournament,
        [currStageId]: {
          ...stage,
          [Number(lastId) + 1]: EMPTY_RACER
        }
      };
    }, {});

    setTournament(newTournament);
  };

  return (
    <div>
      <Table
        head={HEAD}
        body={getTableBody({ tournament, stageId, setTournament })}
      />
      <div className={styles.addButton} onClick={onAddRacer}>+</div>
    </div>
  );
};
