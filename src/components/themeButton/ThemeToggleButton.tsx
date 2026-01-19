import lightThemeLogo from '../../assets/light-icon.svg';
import darkThemeLogo from '../../assets/dark-icon.svg';
import { useTheme } from '../../context/useTheme';
import styles from './ThemeButton.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.modeButton} onClick={toggleTheme}>
      {theme === 'light' 
        ? <img src={lightThemeLogo} alt="Light theme logo" /> 
        : <img src={darkThemeLogo} alt="Dark theme logo" />}
    </button>
  );
};

export default ThemeToggle;
