import { useEffect, useState } from 'react';
import useStore from '../useStore';

const useLocation = () => {
    const [error, setError] = useState(null);
    const { setDataLocation } = useStore(); 

    useEffect(() => {
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
    }, [setDataLocation]);

    return { error };
};

export default useLocation;
