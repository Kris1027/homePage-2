import { useEffect, useState } from 'react';
import Loader from './Loader';
import Error from './Error';

import styles from './Weather.module.css';

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(function () {
    async function fetchWeather() {
      const APIkey = '22d77a699e8145a7a8f95222231608';

      try {
        setIsLoading(true);
        setError('');
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=Rotterdam&aqi=no`
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching weather');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Weather not found');

        setWeather(data);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  if (weather) {
    const { location, current } = weather;
    return (
      <div className={styles.weather}>
        {location.name}: {current.temp_c}°C
        <img src={current.condition.icon} alt='weather' />
      </div>
    );
  }
  return null;
}
