import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    Temp()


    return (
        <div>
            {dataTemp &&
                 <div>{dataTemp.main.temp}</div>
                <div>{dataTemp.main.temp}</div>


            }
        </div>
    )
}
export default Home;