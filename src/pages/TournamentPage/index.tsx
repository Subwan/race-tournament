import { type FC, useMemo } from 'react';
import { generatePath, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Menu, type MenuProps } from '@ui';

import { Stages } from './components';
import { useTournament } from './useTourmanent';

const OPTIONS: MenuProps['options'] = [
  {
    label: 'STAGES',
    value: generatePath(ROUTES.STAGES),
  },
  {
    label: 'RESULTS',
    value: generatePath(ROUTES.RESULTS),
  }
];

export const TournamentPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<Record<string, string>>();

  const { tournament, setTournament, addToTournament } = useTournament();

  const menuValue = useMemo(() => {
    return Object.values(params).reduce<string>(
      (path, param) => path?.replace('/' + param, ''),
      location.pathname,
    );
  }, [params, location.pathname]);

  const renderContent = () => {
    switch (location.pathname) {
      case ROUTES.RESULTS:
        return <div />
      case ROUTES.STAGES:
      default:
        return <Stages tournament={tournament} addToTournament={addToTournament} setTournament={setTournament} />
    }
  };

  const onOptionClick = (value: string) => {
    const lastStageId = tournament && Object.keys(tournament).length;

    if (value === generatePath(ROUTES.STAGES) && lastStageId) {
      return navigate(generatePath(ROUTES.STAGES, { stageId: lastStageId }));
    }

    return navigate(value);
  }

  return (
    <>
      <Menu value={menuValue} options={OPTIONS} onOptionClick={onOptionClick} />
      {renderContent()}
    </>
  );
};
