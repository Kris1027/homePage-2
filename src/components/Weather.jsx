import styles from './Weather.module.css';

import { useEffect, useState } from 'react';

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getWeather() {
      const APIkey = '22d77a699e8145a7a8f95222231608';

      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=Rotterdam&aqi=no`
        );
        // setIsLoading(true);
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error('An error occured while fetching weather data:', error);
        setError('Failed to fetch weather data');
        // setIsLoading(false);
      }
    }

    getWeather();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { location, current } = weatherData;

  return (
    <div className={styles.Weather}>
      <h2>{location.name}</h2>
      <p>{current.temp_c}°C</p>
    </div>
  );
}
