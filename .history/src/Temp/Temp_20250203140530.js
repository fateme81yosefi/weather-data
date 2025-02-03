import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';

  useEffect(() => {
    // دریافت موقعیت مکانی کاربر
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // ساخت URL درخواست API با استفاده از موقعیت مکانی
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        // ارسال درخواست به OpenWeatherMap API
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
      },
      (error) => {
        setError('Error getting location: ' + error.message);
        setLoading(false);
      }
    );
  }, []); // تنها یک‌بار در هنگام بارگذاری کامپوننت اجرا می‌شود

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>Weather Information</h1>
      {weatherData && weatherData.main && weatherData.weather && (
        <>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
};

export default WeatherApp;