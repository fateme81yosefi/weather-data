import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const apiKey = '8146427eadd66ce70d4da8c271521af9';
  const city = 'Tehran';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=ad860b902aa1aaf43417acabb132b2e5&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main && data.weather) {
          setWeatherData(data); 
        } else {
          setError('Invalid data format');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message); 
        setLoading(false); 
      });
  }, [url]); 

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }
  // اگر داده‌ها دریافت شد
  return (
    <div>
      <h1>Weather in {city}</h1>
      {weatherData && weatherData.main && weatherData.weather && (
        <>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default Home;
