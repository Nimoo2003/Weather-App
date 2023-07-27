const API_KEY = "5d61b87ea6f4bdecb91aa3db05a60cea";

const makeIconURL = (iconId) => "https://openweathermap.org/img/wn/01d@2x.png";

const getFormattedWeather = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;
  const { description, icon } = weather[0];

  return {
    description,
    iconURL : makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    speed,
    country,
    name,
  };
};

export { getFormattedWeather };
