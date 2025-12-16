import { type FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Menu, type MenuProps,SaveIndicationText } from '@ui';

import { Stages } from './components';
import { useTournament } from './useTourmanent';

const getOptions = (isSave: boolean): MenuProps['options'] => {
  return [
    {
      label: <SaveIndicationText label='STAGES' isSave={isSave} />,
      value: ROUTES.STAGES,
    },
    {
      label: 'RESULTS',
      value: ROUTES.RESULTS,
    }
  ]
};

export const TournamentPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSave, setIsSave] = useState<boolean>(false);
  const { tournament, setTournament, addToTournament } = useTournament();

  const onClick = (value: string) => {
    setIsSave(oldValue => !oldValue);
    
    void navigate(value);
  };

  const renderContent = () => {
    switch (location.pathname) {
      case ROUTES.RESULTS:
        return <div />
      case ROUTES.STAGES:
      default: 
        return <Stages tournament={tournament} addToTournament={addToTournament} />
    }
  };

  return (
    <>
      <Menu options={getOptions(isSave)} onOptionClick={onClick} />
      {renderContent()}
    </>
  );
};
