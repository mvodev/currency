import themeLogo from '../../assets/light-dark-icon.svg';
import { useTheme } from '../../context/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' 
        ? <img src={themeLogo} width="24" height="24" alt="Light theme logo" /> 
        : <img src={themeLogo} width="24" height="24" alt="Dark theme logo" />}
    </button>
  );
};

export default ThemeToggle;
