const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';
const city = 'Tehran';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
fetch(url)
  .then(response => response.json()) 
  .then(data => {
  
    console.log('Weather Data:', data);
    const temperature = data.main.temp; 
    const description = data.weather[0].description; 

    // نمایش داده‌ها
    console.log(`Temperature: ${temperature}°C`);
    console.log(`Weather: ${description}`);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
const Home = () => {

    return (<h1>{apiKey}</h1>)
}
export default Home;