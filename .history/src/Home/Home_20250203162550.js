import Temp from "../Temp/Temp";
import useStore from '../useStore';
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





    return (
        <div className="container-home">
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div className="contain-weather-info">

                    <div className="location">{dataLocation.city},{dataLocation.country}
                        <img className="location-icon" src="/location-pin-svgrepo-com.svg" alt="Location Icon" />
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