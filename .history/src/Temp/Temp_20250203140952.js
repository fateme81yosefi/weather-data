import React, { useState, useEffect } from 'react';
import { useStore } from '../UseStore'

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const [error, setError] = useState(null);


    const { dataLocation } = useStore();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${dataLocation.city}&appid=ad860b902aa1aaf43417acabb132b2e5&units=metric`;

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
    }, [dataLocation]);



};

export default Home;
