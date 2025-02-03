import React, { useState, useEffect } from 'react';
import useStore from '../useStore';

const Temp = () => {

    const [error, setError] = useState(null);


    const { dataLocation, setDataTemp } = useStore();
    if (dataLocation) {
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
    }else{
        L
    }



};

export default Temp;
