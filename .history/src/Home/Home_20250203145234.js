import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    Temp()


    return (
        <div>
            {dataTemp && dataTemp.main && Array.isArray(dataTemp.weather) && dataTemp.weather.length > 0 && (
                <div>
                    <div>دمای هوا:{dataTemp.main.temp}</div>
                    <div>کمترین دما:{dataTemp.main.temp_min}</div>
                    <div>بیشترین دما:{dataTemp.main.temp_max}</div>
                    <div>دمای احساس شده:{dataTemp.main.feels_like}</div>
                    <div>فشار هوا:{dataTemp.main.pressure}</div>
                    <div>{dataTemp.weather[0]?.main}</div>
                    <div>{dataTemp.weather[0]?.description}</div>
                </div>
            )}

        </div>
    )
}
export default Home;