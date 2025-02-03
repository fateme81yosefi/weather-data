import Temp from "../Temp/Temp";
import useStore from '../useStore';
import { useState, useEffect } from 'react'
import './Home.css'
const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    const [time, setTime] = useState(new Date());

    Temp()

    const WeatherStatusInPersian = (status) => {
        switch (status) {
            case 'Clear':
                return 'آفتابی';
            case 'Clouds':
                return 'ابری';
            case 'Rain':
                return 'بارانی';
            case 'Drizzle':
                return 'باران سبک';
            case 'Thunderstorm':
                return 'طوفان رعد و برق';
            case 'Snow':
                return 'برفی';
            case 'Mist':
                return 'مه';
            case 'Haze':
                return 'دود یا غبار';
            case 'Fog':
                return 'مه غلیظ';
            case 'Dust':
                return 'گرد و غبار';
            default:
                return 'وضعیت نامشخص';
        }
    }


    useEffect(() => {
        // ایجاد تایمر برای بروزرسانی ساعت هر ثانیه
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // پاک کردن تایمر زمانی که کامپوننت از DOM حذف می‌شود
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

    return (
        <div className="container-home">
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div className="contain-weather-info">

                    <div className="location">
                        <div className="">{dataLocation.city},{dataLocation.country}
                            <img className="location-icon" src="/location-pin-svgrepo-com.svg" alt="Location Icon" /></div>
                            <div className="">                    <span>Current Time: {formattedTime}</span>
                            </div>
                    </div>


                    <div className="contain-detail">

                        <div className="contain-temp-main custom-temp">
                            <h1>{Math.round(dataTemp.main.temp)}°C</h1>
                        </div>

                        <div className="contain-temp-main">

                            <div className="weather-status">
                                <div>وضعیت هوا:{WeatherStatusInPersian(dataTemp.weather[0]?.main)}</div>
                            </div>


                            <div>کمترین دما:{Math.round(dataTemp.main.temp_min)}°C</div>
                            <div>بیشترین دما:{Math.round(dataTemp.main.temp_max)}°C</div>
                            <div>دمای احساس شده:{Math.round(dataTemp.main.feels_like)}°C</div>
                            <div>فشار هوا:{dataTemp.main.pressure}</div>

                        </div>

                    </div>


                </div>
            )}

        </div>
    )
}
export default Home;