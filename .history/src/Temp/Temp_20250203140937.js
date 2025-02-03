import React, { useState, useEffect } from 'react';
import { useStore } from '../UseStore'

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const [error, setError] = useState(null);


    const { dataLocation } = useStore();
    if (dataLocation) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${dataLocation.city}&appid=ad860b902aa1aaf43417acabb132b2e5&units=metric`;
    }



};

export default Home;
