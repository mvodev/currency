import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import type { StylesConfig  } from 'react-select';
import type { JSONCurrencyData } from '../../types/types';
import styles from './CurrencyForm.module.css';

interface FormData {
  currencies: { label: string; value: string };
  rubQuantity:number;
}

interface Props {
  currencies:JSONCurrencyData|undefined
}

const customStyles:StylesConfig = {
  // Стилизация контейнера ввода
  control: (base) => ({
    ...base,
    borderColor: 'blue',
    '&:hover': { borderColor: 'darkblue' }, // hover эффект
  }),
  // Стилизация выпадающего меню
  menu: (base) => ({
    ...base,
    backgroundColor: 'white',
  }),
  // Стилизация опций
  option: (base, { isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? 'blue' : isFocused ? 'lightgray' : 'white',
    color: isSelected ? 'white' : 'black',
  }),
};

const CurrencyForm = ({currencies}:Props) => {
  const { 
    control, 
    handleSubmit, 
    register, 
    formState: { errors } 
  } = useForm<FormData>();
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
      <label className={styles.formLabel}>
      Введите количество в рублях:
        <input className={styles.input}
        {...register('rubQuantity', { required: true })}/>
        {errors.rubQuantity?.type === 'required' && (
          <span className={styles.error}>Введите значение</span>)}
      </label>
      <label className={styles.formLabel}>Выберите валюту курс которой к рублю вы хотите посмотреть:</label>
        <Controller
          name="currencies"
          control={control}
          render={({ field }) => (
            <Select
              styles={customStyles}
              options={options}
              value={field.value} 
              onChange={field.onChange} 
              onBlur={field.onBlur} 
              isClearable
            />
          )}
        />
      {/* <button type="submit">Отправить</button> */}
    </form>
  );
}

export default CurrencyForm;

