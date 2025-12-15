import { type FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import type { Tournament } from '@types';
import { Menu, type MenuProps,SaveIndicationText } from '@ui';

import { TournamentApi } from '../../localStorageApi';

const getOptions = (isSave: boolean): MenuProps['options'] => {
  return [
    {
      label: <SaveIndicationText label='STAGE' isSave={isSave} />,
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
  const [tournament, setTournament] = useState<Tournament | null>(TournamentApi.get());
  const [isSave, setIsSave] = useState<boolean>(false);

  const onClick = (value: string) => {
    setIsSave(oldValue => !oldValue);
    
    void navigate(value);
  }

  return (
    <Menu options={getOptions(isSave)} onOptionClick={onClick} />
  );
};
