import type { StagesProps } from '../types';

export type GetTableBodyProps = {
  tournament: NonNullable<StagesProps['tournament']>;
  stageId: string;
  setTournament: NonNullable<StagesProps['setTournament']>;
};
