import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();
    Temp()


    return (
            {dataTemp &&
                 <div></div>

            }
    )
}
export default Home;