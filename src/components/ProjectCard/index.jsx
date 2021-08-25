import weatherApp from '../../assets/weatherapp.png';
import { Card } from './styles';

export default function ProjectCard() {
    return (
        <>
            <Card>
                <img src={weatherApp} alt="Project image" />

                <h3>WeatherApp</h3>
                <div className="division" />

                <p>
                    WeatherApp Web is a simple weather app that uses an
                    OpenWeatherMap API to fetch the temperature of places in the
                    world and their weather data such as: humidity, wind,
                    pressure and temperature.
                </p>
                <p className="labelStack">Stacks</p>
                <div className="stacks">
                    <p>React.JS</p>
                    <p>SCSS</p>
                    <p>Axios</p>
                </div>

                <div className="demo">
                    <a href="">Code</a>
                    <a href="">Live</a>
                </div>
            </Card>
        </>
    );
}
