import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TournamentApi } from 'localStorageApi';
import type { Tournament } from '@types';
import { Button } from '@ui';

import { ROUTES } from '../../constants/routes';

import styles from './styles.module.scss';

export const StartPage: React.FC = () => {
  const navigate = useNavigate();
  const [tournament, setTournament] = useState<Tournament | null>(TournamentApi.get())

  const updateTournament = (tournament: Tournament| null) => {
    TournamentApi.set(tournament);
    setTournament(tournament);
  }

  const onStartClick = () => {
    updateTournament(null);

    void navigate(ROUTES.STAGES)
  }

  return (
    <main className={styles.block}>
      <div>
        <Button onClick={onStartClick}>Начать новый турнир</Button>
        {tournament && (<Button onClick={() => navigate(ROUTES.RESULTS)}>Продолжить</Button>)}
      </div>
    </main>
  )
};