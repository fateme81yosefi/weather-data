import { useEffect, useState } from 'react';
import { useStore } from '../useStore';  // استفاده از Zustand

const useLocation = () => {
    const [error, setError] = useState(null);
    const { setDataLocation } = useStore();  // دسترسی به setDataLocation از Zustand

    useEffect(() => {
        const apiKey = '698d259085b0ae'; // کلید API شما
        const url = `https://ipinfo.io/json?token=${apiKey}`;

        // ارسال درخواست API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data);
                setDataLocation(data);  // ذخیره داده‌ها در Zustand
            })
            .catch(err => {
                setError('Error fetching location');
                console.error(err);
            });
    }, [setDataLocation]);

    return { error };
};

export default useLocation;
