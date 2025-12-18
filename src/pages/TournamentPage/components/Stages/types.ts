import type { useTournament } from '../../useTournament';

export type StagesProps = Pick<ReturnType<typeof useTournament>, 'tournament' | 'addToTournament' | 'setTournament'>;