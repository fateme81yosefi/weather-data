import Temp from "../Temp/Temp";
import useStore from '../useStore';
import { useState, useEffect } from 'react';
import moment from 'moment-jalaali';

import './Home.css';

const Home = () => {
    const { dataLocation, dataTemp } = useStore();
    const [time, setTime] = useState(new Date());
    const [filtered, setFilter] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [hasTomorrowData, setHasTomorrowData] = useState(true);
    const [hasYesterdayData, setHasYesterdayData] = useState(true);


    Temp();

    const WeatherStatusInPersian = (status) => {
        switch (status) {
            case 'Clear': return 'آفتابی';
            case 'Clouds': return 'ابری';
            case 'Rain': return 'بارانی';
            case 'Drizzle': return 'باران سبک';
            case 'Thunderstorm': return 'طوفان رعد و برق';
            case 'Snow': return 'برفی';
            case 'Mist': return 'مه';
            case 'Haze': return 'دود یا غبار';
            case 'Fog': return 'مه غلیظ';
            case 'Dust': return 'گرد و غبار';
            default: return 'وضعیت نامشخص';
        }
    };

    const getWeatherImage = (condition) => {
        switch (condition) {
            case 'Clear': return 'https://cdn2.iconfinder.com/data/icons/weather-682/1024/sun_sunny-512.png';
            case 'Clouds': return 'https://cdn-icons-png.flaticon.com/512/1163/1163634.png';
            case 'Rain':
            case 'Drizzle': return 'https://cdn-icons-png.flaticon.com/512/1163/1163657.png';
            case 'Snow': return 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-sleet-512.png';
            case 'Thunderstorm':
            case 'Haze':
            case 'Mist':
            case 'Fog':
            case 'Dust': return 'https://cdn-icons-png.flaticon.com/512/1146/1146861.png';
            default: return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjje1jJMU-lx_UjZKZGebQybxnH9IvIXWuMQ&s';
        }
    };

    const handleTomorrowClick = () => {
        const tomorrow = new Date(selectedDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setSelectedDate(tomorrow);
    };

    const handleYesterdayClick = () => {
        const tomorrow = new Date(selectedDate);
        tomorrow.setDate(tomorrow.getDate() - 1);
        setSelectedDate(tomorrow);
    };

    const convertToPersianDate = (englishDate) => {
        const persianDate = moment(englishDate).format('jYYYY/jMM/jDD');
        return persianDate;
    };

    const saveTodayWeatherData = (data) => {
        localStorage.setItem('todayWeather', data);
    };

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
            saveTodayWeatherData(dataTemp.filter(item => item.dt_txt.split(' ')[0] === new Date()))
    }, [dataTemp]);


    useEffect(() => {
        const selectedDateStr = selectedDate.toISOString().split('T')[0];
        setFilter(dataTemp.filter(item => item.dt_txt.split(' ')[0] === selectedDateStr));

        const tomorrow = new Date(selectedDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        const tomorrowExists = dataTemp.some(item => item.dt_txt.split(' ')[0] === tomorrowStr);
        setHasTomorrowData(tomorrowExists);

        const yesterday = new Date(selectedDate);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        const yesterdayExists = dataTemp.some(item => item.dt_txt.split(' ')[0] === yesterdayStr);
        setHasYesterdayData(yesterdayExists);

    }, [selectedDate, dataTemp]);

    const formattedTime = `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

    return (
        <div className="container-home">
            {filtered && filtered.length > 0 && (
                <div className="contain-weather-info">
                    <div className="location">
                        <div className="">{dataLocation.city},{dataLocation.country}
                            <img className="location-icon" src="/location-pin-svgrepo-com.svg" alt="Location Icon" />
                        </div>
                        <div className="">
                            <h2>{formattedTime}</h2>
                        </div>
                        <div>                            {convertToPersianDate(selectedDate)}
                        </div>
                    </div>

                    <div className="scrollable">
                        {filtered.map((item, index) => (
                            <div className="contain-detail" key={index}>
                                <div className="time-weather">
                                    <h4>{item.dt_txt.split(' ')[1]}</h4>
                                </div>

                                <div className="contain-temp-main custom-temp">
                                    <h1>{Math.round(item.main.temp)}°C</h1>
                                </div>

                                <div className="contain-temp-main">
                                    <div className="weather-status">
                                        <div>وضعیت هوا: {WeatherStatusInPersian(item.weather[0]?.main)}</div>
                                        <img className="icon-weather" src={getWeatherImage(item.weather[0]?.main)} alt="icon weather" />
                                    </div>
                                    <div className="data-weather">کمترین دما: {Math.round(item.main.temp_min)}</div>
                                    <div className="data-weather">بیشترین دما: {Math.round(item.main.temp_max)}</div>
                                    <div className="data-weather">دمای احساس شده: {Math.round(item.main.feels_like)}</div>
                                    <div className="data-weather">فشار هوا: {item.main.pressure}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="contain-btn">
                        {hasTomorrowData && (
                            <button className="tomorrow" onClick={handleTomorrowClick}>فردا</button>
                        )}

                        {hasYesterdayData && (
                            <button className="tomorrow" onClick={handleYesterdayClick}>دیروز</button>
                        )}
                    </div>

                </div>
            )}
        </div>
    );
};

export default Home;
