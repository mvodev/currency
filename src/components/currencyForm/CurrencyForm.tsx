import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import type { JSONCurrencyData } from '../../types/types';
import styles from './CurrencyForm.module.css';

interface FormData {
  currencies: { label: string; value: string };
}

interface Props {
  currencies:JSONCurrencyData|undefined
}

const CurrencyForm = ({currencies}:Props) => {
  
  const { control, handleSubmit } = useForm<FormData>();
  const onSubmit = (data:FormData) => {
    console.log(data.currencies.value); 
  };

  const options:{label:string,value:string}[] = [];
  if(currencies && currencies.Valute) {
      for(const currency in currencies.Valute){
        options.push({label:currency,value:currency});
      }
    }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.formLabel}>Валюты:</label>
      <Controller
        name="currencies"
        control={control}
        render={({ field }) => (
          <Select
            options={options}
            value={field.value} 
            onChange={field.onChange} 
            onBlur={field.onBlur} 
            isClearable
          />
        )}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default CurrencyForm;

