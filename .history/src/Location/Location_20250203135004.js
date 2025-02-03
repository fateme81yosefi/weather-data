import React, { useEffect, useState } from 'react';

const IPGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

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