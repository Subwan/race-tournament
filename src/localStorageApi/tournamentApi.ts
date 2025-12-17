import dayjs from 'dayjs';
import { type Racer, type Stage, type Tournament } from '@types';

const KEY = 'tournament';

const isObject = (value: unknown): value is object =>
  !!value && typeof value === 'object'

// TODO доработать проверку после развития типов
const isTournament = (value: unknown): value is Tournament =>
  isObject(value)
  && Object.values(value).every(
    stage => isObject(stage)
      && Object.values(stage).every(
        racer =>
          isObject(racer)
          && 'name' in racer
          && 'times' in racer
          && isObject(racer.times)
      )
  );

const getRacer = (racer: Racer): Racer => (
  {
    name: racer.name,
    times: Object.entries(racer.times).reduce<Racer['times']>((timeAcc, [timeStageId, time]) => ({
      ...timeAcc,
      [timeStageId]: dayjs(time)
    }), {})
  }
);

const getStages = (stages: Stage): Stage => Object.entries(stages).reduce<Stage>((racerAcc, [racerId, racer]) => ({
  ...racerAcc,
  [racerId]: getRacer(racer),
}), {});

const getTimeObject = (tournament: Tournament): Tournament =>
  Object.entries(tournament).reduce<Tournament>((acc, [stageId, stage]) => ({
    ...acc,
    [stageId]: getStages(stage)
  }), {});


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

    return getTimeObject(parsedJSON);
  },
  set: (tournament: Tournament | null): void => {
    localStorage.setItem(KEY, JSON.stringify(tournament));
  }
};
