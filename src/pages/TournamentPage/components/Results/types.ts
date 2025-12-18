import type { Dayjs } from 'dayjs';
import type { Racer } from '@types';

import type { useTournament } from '../../useTournament';

export type ResultsProps = Pick<ReturnType<typeof useTournament>, 'tournament'>;

export type TResults = {
  name: Racer['name'],
  times: Record<string, Dayjs>,
  sum: Dayjs,
  diff: string;
};
