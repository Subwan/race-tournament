import type { Tournament } from 'types';

const KEY = 'tournament';

// TODO доработать проверку после развития типов
const isTournament = (value: unknown): value is Tournament =>
  Array.isArray(value) && value.every(racer => typeof racer === 'object' && 'name' in racer);

export const TournamentApi = {
  get: (): Tournament | null => {
    const dataJSON = localStorage.getItem(KEY);

    if (!dataJSON) {
      return null;
    }

    const parsedJSON = JSON.parse(dataJSON);

    if (!isTournament(parsedJSON)) {
      return null;
    }

    return parsedJSON;
  },
  set: (tournament: Tournament | null): void => {
    localStorage.setItem(KEY, JSON.stringify(tournament));
  }
};
