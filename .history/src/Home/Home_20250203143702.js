import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, dataTemp } = useStore();


    return (<Temp />)
}
export default Home;