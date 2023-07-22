require ('dotenv').config();

const API_KEY = process.env.API_KEY

const getFormattedWeather = async(city , units='metric') => {

    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}';

    const data = await fetch(URL) 
        .then((res) => res.json())
        .then((data) => data);

        console.log(data);
};

export {getFormattedWeather};