import { useForm } from 'react-hook-form';

interface FormData {
  city: string;
}

const QueryWeatherForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data:FormData) => {
    console.log(data); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('city', { required: 'Это обязательное поле' })} placeholder="Имя" />
      {errors.city && <p>{errors.city.message}</p>}
      <button type="submit">Отправить</button>
    </form>
  );
}

export default QueryWeatherForm;
