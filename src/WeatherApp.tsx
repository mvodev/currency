import Header from './components/header/Header';
import QueryWeatherForm from './components/queryWeatherForm/QueryWeatherForm';
import { QueryProvider } from './query/QueryProvider';
import styles from './WeatherApp.module.css';

const WeatherApp = () => {

  return (
    <QueryProvider>
      <main className={styles.weatherApp}>
        <Header/>
        <QueryWeatherForm/>
      </main>
    </QueryProvider>
  )
}

export default WeatherApp;
