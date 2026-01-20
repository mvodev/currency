import Header from './components/header/Header';
import CurrencyForm from './components/currencyForm/CurrencyForm';
import type { JSONCurrencyData, ApiError } from './types/types';
import styles from './CurrencyRateApp.module.css';
import { useQuery } from '@tanstack/react-query';

const fetchCurrencyRate = async () => {
  const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  if (!res.ok) throw new Error('Ошибка сети');
  return res.json();
};

const CurrencyRateAppApp = () => {
  const { data, isLoading, isError, error } = useQuery<JSONCurrencyData, ApiError>({
    queryKey: ['currency'], // Ключ для кэширования
    queryFn: fetchCurrencyRate, // Функция запроса
  });

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;

  return (
      <main className={styles.currencyRateApp}>
        <Header/>
        <CurrencyForm currencies={data}/>
      </main>
  )
}

export default CurrencyRateAppApp;
