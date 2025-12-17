import type { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { getMilliseconds, getSixty } from './utils';

import { Input } from '../Input';

import styles from './styles.module.scss';

export type TimeInputProps = {
  value: Dayjs | undefined;
  onChange: (newValue: Dayjs) => void;
  className?: string;
};

type InputTypes = 'mm' | 'ss' | 'sss';

export const TimeInput: FC<TimeInputProps> = ({ value, onChange, className }) => {
  const minutes = value?.minute() ?? 0;
  const seconds = value?.second() ?? 0;
  const milliseconds = value?.millisecond() ?? 0;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>, inputType: InputTypes) => {
    const newDate = dayjs().minute(minutes).second(seconds).millisecond(milliseconds);

    switch (inputType) {
      case 'mm':
        return onChange(newDate.minute(getSixty(e.target.value)));
      case 'ss':
        return onChange(newDate.second(getSixty(e.target.value)));
      case 'sss':
        return onChange(newDate.millisecond(getMilliseconds(e.target.value)));
      default:
        throw new Error(`Incorrect inputType: ${inputType}`);
    }
  };

  return (
    <span className={cn(styles.block, className)}>
      <Input value={minutes.toString()} className={styles.input} onChange={(e) => onInputChange(e, 'mm')} />
      :
      <Input value={seconds.toString()} className={styles.input} onChange={(e) => onInputChange(e, 'ss')} />
      :
      <Input value={milliseconds.toString()} className={styles.wideInput} onChange={(e) => onInputChange(e, 'sss')} />
    </span>
  );
};