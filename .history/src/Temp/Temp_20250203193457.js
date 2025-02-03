import React, { useState, useEffect } from 'react';
import useStore from '../useStore';
import useLocation from '../Location/Location';  

const Temp = () => {
    const [error, setError] = useState(null);
    const { dataLocation, setDataTemp } = useStore();

    useLocation();  

    useEffect(() => {
        if (dataLocation && dataLocation.city) {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${dataLocation.city}&cnt=100&appid=ad860b902aa1aaf43417acabb132b2e5&units=metric`;

            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setDataTemp(data.list); 
                        console.log(data.list);
                    } else {
                        setError('Invalid data format');
                    }
                })
                .catch((error) => {
                    setError(error.message);
                });
        }
    }, [dataLocation, setDataTemp]);
};

export default Temp;
