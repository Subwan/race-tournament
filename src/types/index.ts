import { Dayjs } from 'dayjs';

export type Racer = {
  name: string;
  time: Dayjs | null;
};

export type Stage = Record<string, Racer>;

export type Tournament = Record<string, Stage>;