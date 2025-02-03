import React, { useEffect, useState } from 'react';
import {useS}

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const { dataMe, setDataMe } = useStore();

  useEffect(() => {
    const apiKey = '698d259085b0ae'; 
    const url = `https://ipinfo.io/json?token=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); 
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
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
        </div>
      ) : (
        <p>درحال دریافت اطلاعات موقعیت جغرافیایی شما...</p>
      )}
    </div>
  );
};

export default Location;