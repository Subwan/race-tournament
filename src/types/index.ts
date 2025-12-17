import { Dayjs } from 'dayjs';

export type Racer = {
  name: string;
  times: Record<string, Dayjs>;
};

export type Stage = Record<string, Racer>;

export type Tournament = Record<string, Stage>;