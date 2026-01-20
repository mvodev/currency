import Header from './components/header/Header';
import QueryWeatherForm from './components/queryWeatherForm/QueryWeatherForm';
import styles from './WeatherApp.module.css';
import { useQuery } from '@tanstack/react-query';

const fetchCurrencyRate = async () => {
  const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  if (!res.ok) throw new Error('Ошибка сети');
  return res.json();
};

const CurrencyRateAppApp = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['currency'], // Ключ для кэширования
    queryFn: fetchCurrencyRate, // Функция запроса
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;
  console.log(data)

  return (
  
      <main className={styles.currencyRateApp}>
        <Header/>
        <QueryWeatherForm/>
      </main>
  )
}

export default CurrencyRateAppApp;
