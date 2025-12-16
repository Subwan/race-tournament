import type { useTournament } from '../../useTourmanent';

export type StagesProps = Pick<ReturnType<typeof useTournament>, 'tournament' | 'addToTournament'>;