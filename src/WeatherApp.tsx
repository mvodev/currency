import Header from './components/header/Header';
import styles from './WeatherApp.module.css';

const WeatherApp = () => {

  return (
    <main className={styles.weatherApp}>
      <Header/>
    </main>
  )
}

export default WeatherApp;
