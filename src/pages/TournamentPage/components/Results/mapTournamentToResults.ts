import dayjs, { Dayjs } from 'dayjs';

import type { ResultsProps, TResults } from './types';

type RacerWithTimes = Record<string, Pick<TResults, 'name' | 'times'>>;
type RacerWithSum = Pick<TResults, 'name' | 'times' | 'sum'>[];

const DEFAULT_DIFF = '+00:00:000';

const getTimeSum = (times: TResults['times']): TResults['sum'] => {
  const dateSum = Object.values(times).reduce<Dayjs>((acc, time) => {
    const minutes = time?.minute() ?? 0;
    const seconds = time?.second() ?? 0;
    const milliseconds = time?.millisecond() ?? 0;

    return acc.add(minutes, 'm').add(seconds, 's').add(milliseconds, 'ms');
  }, dayjs().minute(0).second(0).millisecond(0))

  return dateSum;
};

const formatDuration = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const millis = milliseconds % 1000;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMillis = String(millis).padStart(3, '0');

  return `+${formattedMinutes}:${formattedSeconds}:${formattedMillis}`;
}

const getDiff = (currTime: Dayjs, fastTime: Dayjs): string => {
  return formatDuration(currTime.diff(fastTime));
};

const getRacerWithDiff = (racers: RacerWithSum, fastestTime: Dayjs | null) => {
  return racers.reduce<TResults[]>((acc, racer) => {
    let diff = DEFAULT_DIFF;

    if (fastestTime) {

      diff = getDiff(racer.sum, fastestTime);
    }

    return [
      ...acc,
      {
        ...racer,
        diff,
      }
    ];
  }, [])
};

const getRacersWithSum = (racers: RacerWithTimes) => {
  let fastestTime: Dayjs | null = null;

  const resultWithTime = Object.values(racers).reduce<RacerWithSum>(
    (acc, racer) => {
      const sum = getTimeSum(racer.times);

      const newRacer = {
        ...racer,
        sum,
      };

      if (!fastestTime || sum.isBefore(fastestTime)) {
        fastestTime = sum;

        return [
          newRacer,
          ...acc,
        ];
      }

      return [
        ...acc,
        newRacer,
      ];
    },
    []
  );

  return getRacerWithDiff(resultWithTime, fastestTime);
};

const getRacerWithTimes = (
  tournament: NonNullable<ResultsProps['tournament']>
) => {
  const racers: RacerWithTimes = {};

  Object.entries(tournament).forEach(([stageId, stage]) => {
    Object.entries(stage).forEach(([racerId, racer]) => {
      racers[racerId] = {
        name: racer.name,
        times: {
          ...racers[racerId]?.times,
          [stageId]: racer.time ?? dayjs().minute(0).second(0).millisecond(0),
        }
      }
    });
  })

  return getRacersWithSum(racers);
};

export const mapTournamentToResults = (tournament: NonNullable<ResultsProps['tournament']>): TResults[] => {
  return getRacerWithTimes(tournament);
};
