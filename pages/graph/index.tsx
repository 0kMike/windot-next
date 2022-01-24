import styles from './graph.module.css';
import { weightHistory } from '../../src/assets/data/weight';
import { CSSProperties, ReactElement } from 'react';

export default function Graph(): ReactElement {
  const renderEntries = () => {
    const maxValue: number = Math.max(...weightHistory);
    const minValue: number = Math.min(...weightHistory);
    const valueRange: number =
      Math.max(...weightHistory) - Math.min(...weightHistory);
    return weightHistory.map((entry: number, index: number) => {
      const inlineStyle: CSSProperties = {
        height: `${(100 / valueRange) * (maxValue - entry)}%`,
        minHeight: '35px',
      };
      return (
        <section
          key={index}
          className="card m-4 flex flex-1 flex-col h-full items-center justify-between transition duration-500">
          <div className="flex flex-col justify-end mb-4" style={inlineStyle}>
            <div className="h-8 w-8 border-box rounded-full border-4 bg-yellow border-grey-900 dark:border-yellow dark:bg-grey-900 transition duration-500" />
          </div>
          <p>{entry}</p>
        </section>
      );
    });
  };

  return <main className={styles.container}>{renderEntries()}</main>;
}
