import themeLogo from '../../assets/light-dark-icon.svg';
import { useTheme } from '../../context/useTheme';
import styles from './ThemeButton.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.modeButton} onClick={toggleTheme}>
      {theme === 'light' 
        ? <img src={themeLogo} width="24" height="24" alt="Light theme logo" /> 
        : <img src={themeLogo} width="24" height="24" alt="Dark theme logo" />}
    </button>
  );
};

export default ThemeToggle;
