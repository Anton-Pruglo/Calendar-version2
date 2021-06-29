import { ThemeButton } from '../ThemeButton';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeButton />
    </header>
  );
};
