import { type FC, useState } from 'react';
import cn from 'classnames';
import { TrashIcon } from '@assets';
import { type Stage, type Tournament } from '@types';
import { Button } from '@ui';

import type { GetTableBodyProps } from './types';

import styles from './styles.module.scss';

type Props = Pick<GetTableBodyProps, 'tournament' | 'setTournament'> & {
  racerId: string;
};

export const DeleteRacerButton: FC<Props> = ({ tournament, racerId, setTournament }) => {
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);

  const onRacerDelete = () => {
    const newTournament = Object.entries(tournament).reduce<Tournament>((accTournament, [currStageId, stage]) => ({
      ...accTournament,
      [currStageId]: Object.entries(stage).reduce<Stage>((accStage, [currRacerId, racer]) => {
        if (currRacerId == racerId) {
          return accStage;
        }

        return {
          ...accStage,
          [currRacerId]: racer,
        }
      }, {}),
    }), {});

    setIsConfirmOpen(false);
    setTournament(newTournament);
  };

  const renderDeleteConfirm = () => {
    if (!isConfirmOpen) {
      return null;
    }

    return (
      <div className={styles.confirm}>
        Delete racer?
        <span className={styles.buttonContainer}>
          <Button className={cn(styles.confirmButton, styles.green)} onClick={onRacerDelete}>
            Yes
          </Button>
          <Button className={cn(styles.confirmButton, styles.red)} onClick={() => setIsConfirmOpen(false)}>
            No
          </Button>
        </span>
      </div>
    );
  };

  return (
    <>
      <Button
        key={`${racerId} delete`}
        className={styles.deleteButton}
        onClick={() => setIsConfirmOpen(oldValue => !oldValue)}
      >
        <TrashIcon />
      </Button>
      {renderDeleteConfirm()}
    </>
  )
};
