import React, { useState, useEffect } from 'react';

const Temp = () => {

    const [error, setError] = useState(null);


    const { dataLocation,setWeatherData } = seStore();
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
    }, [dataLocation.city]);



};

export default Temp;
