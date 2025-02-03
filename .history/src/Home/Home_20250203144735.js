import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    Temp()


    return (
        <div>
            {dataTemp &&
                (<div><div>{dataTemp.main?.temp}</div>
                    <div>{dataTemp.main?.temp_min}</div>
                    <div>{dataTemp.main?.temp_max}</div>
                    <div>{dataTemp.main?.feels_like}</div>
                    <div>{dataTemp.?weather?weather[0].main}</div>
                    <div>{dataTemp.weather[0]?.description}</div>
                

                </div>)

            }
        </div>
    )
}
export default Home;