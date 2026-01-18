import ThemeToggle from './components/ThemeToggleButton';
import styles from './WeatherApp.module.css';

const WeatherApp = () => {

  return (
    <div className={styles.weatherApp}>
      <header className={styles.header}>
        <ThemeToggle/>
      </header>
    <h1>Прогноз погоды</h1>
    </div>
  )
}

export default WeatherApp;
