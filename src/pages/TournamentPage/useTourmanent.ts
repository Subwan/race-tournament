import { useCallback, useState } from 'react';
import { TournamentApi } from 'localStorageApi';
import type { Stage, Tournament } from '@types';

export const useTournament = () => {
    const [tournament, setTournament] = useState<Tournament | null>(TournamentApi.get());

    const setFullTournament = useCallback((newTournament: Tournament | null) => {
      TournamentApi.set(newTournament);
      setTournament(newTournament);
    }, []);

    const addToTournament = useCallback((newStage: Stage) => {
      setTournament((oldValue) => {
        const newValue = [
          ...oldValue ?? [],
          newStage,
        ];

        TournamentApi.set(newValue);

        return newValue;
      })
    }, []);

    return { tournament, setTournament: setFullTournament, addToTournament };
};
