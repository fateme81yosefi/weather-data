import React, { useState, useEffect } from 'react';
import {useStore} from '../UseStore'

const Home = () => {
    const [weatherData, setWeatherData] = useState(null);

    const [error, setError] = useState(null);


    const { dataLocation } = useStore();
    if(dataLocation){

    }
    


};

export default Home;
