const apiKey = 'ad860b902aa1aaf43417acabb132b2e5';
const city = 'Tehran';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
fetch(url)
  .then(response => response.json())  // تبدیل پاسخ به فرمت JSON
  .then(data => {
    // دریافت داده‌های آب و هوا از API
    console.log('Weather Data:', data);
    const temperature = data.main.temp; // دما
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