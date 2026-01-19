import ThemeToggle from "../themeButton/ThemeToggleButton";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeToggle/>
      <h1 className={styles.mainTitle}>Прогноз погоды</h1>
    </header>
  )
}

export default Header;