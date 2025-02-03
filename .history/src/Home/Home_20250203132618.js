const apiKey = 'ad860b902aa1aaf43417acabb132b2e5'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // اضافه کردن units برای دمای سلسیوس

const Home = () => {

    return (<h1>{apiKey}</h1>)
}
export default Home;