import type { ChangeEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { type Stage, type Tournament } from '@types';
import { Input, type TableProps, TimeInput } from '@ui';

import type { StagesProps } from '../types';

type Props = {
  tournament: NonNullable<StagesProps['tournament']>;
  stageId: string;
  setTournament: NonNullable<StagesProps['setTournament']>;
};

const replaceNames = (tournament: Tournament, newName: string, racerId: string): Tournament =>
  Object.entries(tournament).reduce<Tournament>((acc, [currentStageId, currStage]) => ({
    ...acc,
    [currentStageId]: Object.entries(currStage).reduce<Stage>((accRacer, [currRacerId, racer]) => {
      if (currRacerId !== racerId) {
        return {
          ...accRacer,
          [currRacerId]: racer,
        };
      }

      return ({
        ...accRacer,
        [racerId]: {
          ...racer,
          name: newName,
        }
      });
    }, {})
  }), {});

export const getTableBody = ({ tournament, stageId, setTournament }: Props): TableProps['body'] => {
  const currentStage = tournament[stageId];

  const onNameChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const newTournament = replaceNames(tournament, e.target.value, id);

    setTournament(newTournament);
  };

  const onTimeChange = (newTime: Dayjs, id: string) => {
    const newCurrentStage = {
      ...currentStage,
      [id]: {
        ...currentStage[id],
        times: {
          ...currentStage[id].times,
          [stageId]: newTime,
        }
      },
    };

    setTournament({
      ...tournament,
      [stageId]: newCurrentStage,
    });
  };

  return !!currentStage && Object.entries(currentStage)?.map(([id, racer]) => ({
    label: <Input value={racer.name ?? ''} onChange={(e) => onNameChange(e, id)} />,
    cells: [
      <TimeInput key={id} value={racer.times[stageId]} onChange={time => onTimeChange(time, id)} />
    ]
  })) || [];
};
