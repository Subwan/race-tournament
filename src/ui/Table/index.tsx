import type { FC, ReactNode } from 'react'
import cn from 'classnames';

import styles from './styles.module.scss';

export type TableProps = {
  className?: string;
  head: string[];
  body: {
    label: ReactNode;
    cells: ReactNode[];
  }[],
};

const renderHead = (head: TableProps['head']) => head.map(((element, index) => <td key={element + index}>{element}</td>));

const renderBody = (body: TableProps['body']) => body.map((element, index) => {
  const renderCells = () => element.cells.map((cell, cellIndex) => (
    <td key={cellIndex}>{cell}</td>
  ))

  return (
    <tr key={index}>
      <th>{element.label}</th>
      {renderCells()}
    </tr>
  );
});

export const Table: FC<TableProps> = ({ className, head, body }) => {
  return (
    <table className={cn(styles.table, className)} >
      <thead><tr>{renderHead(head)}</tr></thead>
      <tbody>
        {renderBody(body)}
      </tbody>
    </table>
  );
};
