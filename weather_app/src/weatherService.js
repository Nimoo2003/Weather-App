const API_KEY='5d61b87ea6f4bdecb91aa3db05a60cea'

const getFormattedWeather = async(city , units='metric') => {

    const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}';

    const data = await fetch(URL) 
        .then((res) => res.json())
        .then((data) => data);

        console.log(data);
};

export {getFormattedWeather};