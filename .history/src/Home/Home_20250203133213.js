import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); // برای ذخیره داده‌های وضعیت آب و هوا
  const [loading, setLoading] = useState(true); // برای نمایش حالت بارگذاری
  const [error, setError] = useState(null); // برای مدیریت خطاها

  const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';
  const city = 'Tehran';
  const url = `
 https://api.openweathermap.org/data/2.5/{
API_KEY}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main && data.weather) {
          setWeatherData(data); // ذخیره داده‌ها در وضعیت
        } else {
          setError('Invalid data format');
        }
        setLoading(false); // اتمام بارگذاری
      })
      .catch((error) => {
        setError(error.message); // در صورت خطا ذخیره خطا
        setLoading(false); // اتمام بارگذاری
      });
  }, [url]); // فقط زمانی که URL تغییر کند این اثر اجرا می‌شود

  // اگر در حال بارگذاری است
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // اگر خطا وجود داشته باشد
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
