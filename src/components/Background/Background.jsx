import React from 'react';
import styles from './Background.module.css';

export default function Background({ children }) {
  const bg = (className) => `${styles.bg} ${className}`;
  return (
    <div className={styles.base}>
      <div className={bg(styles.clouds)} />
      <div className={bg(styles.blocks)} />
      <div className={bg(styles.layer1)} />
      <div className={bg(styles.layer2)} />
      <div className={bg(styles.layer3)} />
      <div>{children}</div>
    </div>
  );
}
