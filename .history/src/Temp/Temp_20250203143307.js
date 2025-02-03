import React, { useState, useEffect } from 'react';
import useStore from '../useStore';
import useLocation from '../Location/Location';

const Temp = () => {
    const [error, setError] = useState(null);
    const { dataLocation, setDataTemp } = useStore();

    useLocation();

    useEffect(() => {
        if (dataLocation && dataLocation.city) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${dataLocation.city}&appid=ad860b902aa1aaf43417acabb132b2e5&units=metric`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data && data.main && data.weather) {
                        setDataTemp(data);
                    } else {
                        setError('Invalid data format');
                    }
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }, [dataLocation, setDataTemp]);

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <div>
                    <h1>Weather Information</h1>
                    {dataLocation && dataLocation.city ? (
                        <p>Loading weather data for {dataLocation.city}...</p>
                    ) : (
                        <p>Location is not available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Temp;
