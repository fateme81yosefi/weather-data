import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    Temp()

    const getWeatherStatusInPersian = (status) => {
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
        <div>
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div>
                    <div>دمای هوا:{dataTemp.main.temp}</div>
                    <div>کمترین دما:{dataTemp.main.temp_min}</div>
                    <div>بیشترین دما:{dataTemp.main.temp_max}</div>
                    <div>دمای احساس شده:{dataTemp.main.feels_like}</div>
                    <div>فشار هوا:{dataTemp.main.pressure}</div>
                    <div>وضعیت هوا:{dataTemp.weather[0]?.main}</div>
                    <div>توضیحات:{dataTemp.weather[0]?.description}</div>
                </div>
            )}

        </div>
    )
}
export default Home;