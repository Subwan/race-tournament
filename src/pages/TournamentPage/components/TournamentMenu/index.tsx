import { type FC, useState } from 'react';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import { HomeIcon, TrashIcon } from '@assets';
import { Button } from '@ui';

import { ROUTES } from '../../../../constants/routes';

import type { TournamentMenuProps } from './types';

import styles from './styles.module.scss';

export const TournamentMenu: FC<TournamentMenuProps> = ({ tournament, setTournament }) => {
  const { stageId } = useParams();
  const navigate = useNavigate();
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

  const onBackClick = () => {
    void navigate('/');
  }

  const onDelete = () => {
    if (!stageId) {
      return;
    }

    const newTournament = {
      ...tournament
    };

    delete newTournament[stageId];

    setTournament(newTournament);
    setIsDeleteOpen(false);

    const newStageId = Number(stageId) - 1

    void navigate(generatePath(ROUTES.STAGES, { stageId: newStageId || undefined }))
  };

  const renderDeleteConfirm = () => {
    if (!isDeleteOpen) {
      return null;
    }

    return (
      <div className={styles.confirm}>
        Delete stage №{stageId}?
        <span className={styles.buttonContainer}>
          <Button className={cn(styles.confirmButton, styles.green)} onClick={onDelete}>
            Yes
          </Button>
          <Button className={cn(styles.confirmButton, styles.red)} onClick={() => setIsDeleteOpen(false)}>
            No
          </Button>
        </span>
      </div>
    );
  };

  return (
    <div className={styles.block}>
      <span className={styles.container}>
        {stageId && (
          <>
            <Button
              className={cn(styles.button, styles.red)}
              onClick={() => setIsDeleteOpen(oldValue => !oldValue)}
            >
              <TrashIcon />
            </Button>
            {renderDeleteConfirm()}
          </>
        )}
        <Button className={styles.button} onClick={onBackClick}><HomeIcon /></Button>
      </span>
    </div>
  );
};
