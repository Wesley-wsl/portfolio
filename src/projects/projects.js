import countries from '../assets/countries-app.jpg';
import weatherApp from '../assets/weatherapp.png';
import cinetrending from '../assets/cinetrending.png';

export const projects = [
    {
        name: 'WeatherApp',
        description:
            'WeatherApp Web is a simple weather app that uses an OpenWeatherMap API to fetch the temperature of places in the world and their weather data such as: humidity, wind, pressure and temperature.',
        stacks: 'React.JS, Axios, Styled-components.',
        img: weatherApp,
        live: 'https://weatherappwsl.netlify.app',
        source: 'https://github.com/Wesley-wsl/WeatherApp',
    },
    {
        name: 'CineTrending',
        description:
            'CineTrending is a project that show the top 10 trending movies/series for day and your information.',
        stacks: 'React.JS, Axios, Styled-components',
        img: cinetrending,
        live: 'https://cinetrending.netlify.app',
        source: 'https://github.com/Wesley-wsl/CineTrending',
    },
    {
        name: 'CountriesApp',
        description:
            'countries-app is a project that show all countries and your main informations.',
        stacks: 'React.JS, Axios, Styled-components',
        img: countries,
        live: 'https://countries-app-wsl.netlify.app',
        source: 'https://github.com/Wesley-wsl/countries-app',
    },
];
