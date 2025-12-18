import { useTournament } from '../../useTournament';

export type TournamentMenuProps = Pick<ReturnType<typeof useTournament>, 'tournament' | 'setTournament'>;