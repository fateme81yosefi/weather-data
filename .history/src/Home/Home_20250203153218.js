import Temp from "../Temp/Temp";
import useStore from '../useStore';
import './Home.css'
const Home = () => {

    const { dataLocation, dataTemp } = useStore();
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





    return (
        <div className="container-home">
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div className="contain-weather-info">

                    <div className="location">
                        <div>{dataLocation.city},{dataLocation.country}</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="blue">
  <path d="M12 2C8.13 2 5 5.13 5 9c0 2.97 1.76 5.68 4.26 7.34l.74.6 2.73 2.14c.38.3.89.3 1.27 0l2.73-2.14.74-.6C17.24 14.68 19 11.97 19 9c0-3.87-3.13-7-7-7zm0 10.5l-1.76-1.4-.74-.6C8.9 9.55 8 7.89 8 6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.89-.9 3.55-2.5 4.5l-.74.6L12 12.5z"/>
</svg>

                    </div>

                    <div>دمای هوا:{Math.round(dataTemp.main.temp)}°C</div>
                    <div>کمترین دما:{Math.round(dataTemp.main.temp_min)}°C</div>
                    <div>بیشترین دما:{Math.round(dataTemp.main.temp_max)}°C</div>
                    <div>دمای احساس شده:{Math.round(dataTemp.main.feels_like)}°C</div>
                    <div>فشار هوا:{dataTemp.main.pressure}</div>
                    <div>وضعیت هوا:{WeatherStatusInPersian(dataTemp.weather[0]?.main)}</div>
                </div>
            )}

        </div>
    )
}
export default Home;