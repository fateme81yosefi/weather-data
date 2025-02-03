// import React, { useState, useEffect } from 'react';

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';

//   useEffect(() => {
//     // دریافت موقعیت مکانی کاربر
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         // ساخت URL درخواست API با استفاده از موقعیت مکانی
//         const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

//         // ارسال درخواست به OpenWeatherMap API
//         fetch(url)
//           .then((response) => response.json())
//           .then((data) => {
//             if (data && data.main && data.weather) {
//               setWeatherData(data);
//             } else {
//               setError('Invalid data format');
//             }
//             setLoading(false);
//           })
//           .catch((error) => {
//             setError(error.message);
//             setLoading(false);
//           });
//       },
//       (error) => {
//         setError('Error getting location: ' + error.message);
//         setLoading(false);
//       }
//     );
//   }, []); // تنها یک‌بار در هنگام بارگذاری کامپوننت اجرا می‌شود

//   // اگر در حال بارگذاری است
//   if (loading) {
//     return <h1>Loading...</h1>;
//   }

//   // اگر خطا وجود داشته باشد
//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   // اگر داده‌ها دریافت شد
//   return (
//     <div>
//       <h1>Weather Information</h1>
//       {weatherData && weatherData.main && weatherData.weather && (
//         <>
//           <p>Temperature: {weatherData.main.temp}°C</p>
//           <p>Weather: {weatherData.weather[0].description}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;
import React, { useEffect, useState } from 'react';

const IPGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'YOUR_API_KEY'; // توکن API خود را وارد کنید
    const url = `https://ipinfo.io/json?token=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLocation(data);
      })
      .catch(err => {
        setError('Error fetching location');
        console.error(err);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {location ? (
        <div>
          <h1>Location Info</h1>
          <p>IP: {location.ip}</p>
          <p>City: {location.city}</p>
          <p>Region: {location.region}</p>
          <p>Country: {location.country}</p>
          <p>Location: {location.loc}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IPGeolocation;
