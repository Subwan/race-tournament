import type { Stage, Tournament } from '@types';

import { EMPTY_RACER } from '../../../../../constants/defaultValues';

const deleteTimes = (stage: Stage): Stage => {
  return Object.entries(stage).reduce<Stage>((acc, [id, racer]) => ({
    ...acc,
    [id]: {
      name: racer.name,
      times: EMPTY_RACER.times
    }
  }), {})
};

export const getStageWithEmptyTimers = (tournament: Tournament | null, newStageId: number, stageId: string | undefined): Stage => {

  if (!stageId || !tournament || !tournament[stageId]) {
    return { [newStageId]: EMPTY_RACER };
  }

  return deleteTimes(tournament[stageId]);
};
