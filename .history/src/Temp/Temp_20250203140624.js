import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
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

 
};

export default Home;
