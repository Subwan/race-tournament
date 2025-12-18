import { TIME_FORMAT } from 'constants/date';
import type { TableProps } from '@ui';

import { mapTournamentToResults } from './mapTournamentToResults';

import type { ResultsProps } from './types';

export const getTableHead = (tournament: NonNullable<ResultsProps['tournament']>): TableProps['head'] => {
  const stages = Object.keys(tournament).map((key) => key);

  return [
    'Racer',
    ...stages,
    'Sum',
    'Diff',
  ];
};

export const getTableBody = (tournament: NonNullable<ResultsProps['tournament']>): TableProps['body'] => {
  const results = mapTournamentToResults(tournament);

  return results.map((racer) => {
    const getStageTime = Object.values(racer.times).map(time => ({
      node: time.format(TIME_FORMAT)
    }));

    return {
      label: racer.name,
      cells: [
        ...getStageTime,
        { node: racer.sum.format(TIME_FORMAT) },
        { node: racer.diff },
      ],
    };
  });
};
