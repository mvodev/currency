import ThemeToggle from "../theme/ThemeToggleButton";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeToggle/>
    </header>
  )
}

export default Header;