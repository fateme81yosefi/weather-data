import React, { useEffect, useState } from 'react';
import { useStore } from '../useStore';

const Location = () => {
    const [error, setError] = useState(null);
    const { setDataLocation } = useStore();

    // تابع برای درخواست لوکیشن از API
     const fetchLocation = () => {
        const apiKey = '698d259085b0ae';
        const url = `https://ipinfo.io/json?token=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                setDataLocation(data);
            })
            .catch(err => {
                setError('Error fetching location');
                console.error(err);
            });
    }
}
export default Location;