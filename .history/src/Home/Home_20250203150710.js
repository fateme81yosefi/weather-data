import Temp from "../Temp/Temp";
import useStore from '../useStore';

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

    const convertTempToCelsiuos = (temp) => {
        const kelvin = parseFloat(temp);  // اطمینان از اینکه ورودی عددی است
        if (isNaN(kelvin)) {
            return 'ورودی معتبر نیست';
        }
        return (kelvin - 273.15).toFixed(2);  // تبدیل به سلسیوس
    }
    



    return (
        <div>
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div>
                    <div>دمای هوا:{convertTempToCelsiuos(dataTemp.main.temp)}°C</div>
                    <div>کمترین دما:{convertTempToCelsiuos(dataTemp.main.temp_min)}°C</div>
                    <div>بیشترین دما:{convertTempToCelsiuos(dataTemp.main.temp_max)}°C</div>
                    <div>دمای احساس شده:{convertTempToCelsiuos(dataTemp.main.feels_like)}°C</div>
                    <div>فشار هوا:{dataTemp.main.pressure}</div>
                    <div>وضعیت هوا:{WeatherStatusInPersian(dataTemp.weather[0]?.main)}</div>
                </div>
            )}

        </div>
    )
}
export default Home;