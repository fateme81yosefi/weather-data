import Temp from "../Temp/Temp";
import useStore from '../useStore';

const Home = () => {

    const { dataLocation, setDataTemp } = useStore();


    return (<Temp />)
}
export default Home;