import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null); 
 
  const [error, setError] = useState(null); 


    const { setDataLocation } = useStore();
  

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.main && data.weather) {
          setWeatherData(data); 
        } else {
          setError('Invalid data format');
        }
      })
      .catch((error) => {
        setError(error.message); 
      });
  }, [url]); 

 
};

export default Home;
