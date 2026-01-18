import darkThemeLogo from '../assets/dark-mode.svg';
import lightThemeLogo from '../assets/light-mode.svg';
import { useTheme } from '../context/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' 
        ? <img src={lightThemeLogo} alt="Light theme logo" /> 
        : <img src={darkThemeLogo} alt="Dark theme logo" />}
    </button>
  );
};

export default ThemeToggle;
