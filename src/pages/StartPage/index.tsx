import React from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import { TournamentApi } from 'localStorageApi';
import { Button } from '@ui';

import { ROUTES } from '../../constants/routes';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const tournament = TournamentApi.get();

  const onStartClick = () => {
    TournamentApi.set(null);

    void navigate(generatePath(ROUTES.STAGES))
  }

  return (
    <main className={styles.block}>
      <div className={styles.container}>
        <Button onClick={onStartClick}>New tournament</Button>
        {tournament && (<Button onClick={() => navigate(ROUTES.RESULTS)}>Continue</Button>)}
      </div>
    </main>
  )
};