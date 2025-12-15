import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TournamentApi } from 'localStorageApi';
import { Button } from '@ui';

import { ROUTES } from '../../constants/routes';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const tournament = TournamentApi.get();

  const onStartClick = () => {
    TournamentApi.set(null);

    void navigate(ROUTES.TOURNAMENT)
  }

  return (
    <main className={styles.block}>
      <div>
        <Button onClick={onStartClick}>Начать новый турнир</Button>
        {tournament && (<Button onClick={() => navigate(ROUTES.TOURNAMENT)}>Продолжить</Button>)}
      </div>
    </main>
  )
};