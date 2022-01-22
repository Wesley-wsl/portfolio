import cinetrending from '../assets/cinetrending.png';
import countries from '../assets/countries-app.jpg';
import daynotes from '../assets/daynotes.png';
import invoiceApp from '../assets/invoiceApp.png';
import letmeask from '../assets/letmeask.png';
import weatherApp from '../assets/weatherapp.png';

export const projects = [
    {
        name: 'WeatherApp',
        description:
            'WeatherApp Web is a weather app that fetch the temperature of places in the world and their weather datas.',
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
    {
        name: 'Letmeask',
        description:
            "Letmeask is perfect for content/live creators to create rooms and answer live people's queries in real time",
        stacks: 'React.JS, SCSS, Firebase, Typescript.',
        img: letmeask,
        live: 'https://letmeask-wsl.netlify.app',
        source: 'https://github.com/Wesley-wsl/letMeAsk.git',
    },
    {
        name: 'Day-notes',
        description:
            'Day-notes is a notes book project full-stack to control notes in database.',
        stacks: 'React.JS, Node.JS, MongoDB',
        img: daynotes,
        live: 'https://day-notes.netlify.app',
        source: 'https://github.com/Wesley-wsl/day-notes',
    },
    {
        name: 'invoice-app',
        description: 'invoice-app is a project to organize your invoices.',
        stacks: 'Next.JS, Styled-components, MongoDB, TypeScript',
        img: invoiceApp,
        live: 'https://invoice-app-weld.vercel.app',
        source: 'https://github.com/Wesley-wsl/invoice-app',
    },
];
