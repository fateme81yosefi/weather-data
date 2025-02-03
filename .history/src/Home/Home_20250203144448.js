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
                    <div>{dataTemp.main?.temp}</div>
                </div>)

            }
        </div>
    )
}
export default Home;