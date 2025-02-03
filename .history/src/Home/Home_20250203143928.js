import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();


    return (
        <div>
            <Temp /> 
        </div>
    )
}
export default Home;