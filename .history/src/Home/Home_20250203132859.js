import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); // برای ذخیره داده‌های وضعیت آب و هوا
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';
  const city = 'Tehran';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error); 
        setLoading(false);
      });
  }, [url]); 

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Weather in {city}</h1>
      {weatherData && (
        <>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default Home;
