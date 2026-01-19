import Header from './components/header/Header';
import styles from './WeatherApp.module.css';

const WeatherApp = () => {

  return (
    <div className={styles.weatherApp}>
      <Header/>
      <h1>Прогноз погоды</h1>
    </div>
  )
}

export default WeatherApp;
