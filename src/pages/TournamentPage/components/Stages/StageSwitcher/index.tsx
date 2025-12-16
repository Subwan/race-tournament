import { type FC } from 'react';

import { EMPTY_RACER } from '../../../../../constants/defaultValues';

import type { StagesProps } from '../types';

import styles from './styles.module.scss';

export const StageSwitcher: FC<StagesProps> = ({ tournament, addToTournament }) => {

  const addNewStage = () => {
    addToTournament([EMPTY_RACER]);
  };
  
  const renderList = () => tournament?.map((stage, index) => (
    <li key={index}>{index + 1}</li>
  ));

  return (
    <ul className={styles.list}>
      {renderList()}
      <li onClick={addNewStage}>+</li>
    </ul>
  );
};