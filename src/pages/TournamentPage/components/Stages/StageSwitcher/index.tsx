import { type FC } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import { getStageWithEmptyTimers } from './utils';

import { ROUTES } from '../../../../../constants/routes';

import type { StagesProps } from '../types';

import styles from './styles.module.scss';

type Props = Pick<StagesProps, 'tournament' | 'addToTournament'>;

export const StageSwitcher: FC<Props> = ({ tournament, addToTournament }) => {
  const { stageId } = useParams();
  const navigate = useNavigate();

  const addNewStage = () => {
    const newStageId = (tournament && Object.keys(tournament)?.length || 0) + 1;
    const stage = getStageWithEmptyTimers(tournament, newStageId, stageId);

    addToTournament(stage);

    void navigate(generatePath(ROUTES.STAGES, { stageId: newStageId }));
  };

  const selectStage = (newStageId: string) => {
    if (stageId === newStageId) {
      return;
    }

    void navigate(generatePath(ROUTES.STAGES, { stageId: newStageId }));
  };

  const renderList = () => tournament && Object.keys(tournament)?.map((id) => {
    const currentStage = id;
    const isActive = Boolean(stageId) && stageId === currentStage;

    return (
      <li
        key={currentStage}
        className={cn({ [styles.active]: isActive })}
        onClick={() => selectStage(currentStage)}
      >
        {id}
      </li>
    )
  });

  return (
    <ul className={styles.list}>
      {renderList()}
      <li onClick={addNewStage}>+</li>
    </ul>
  );
};