import PropTypes from "prop-types";

function WeatherCard({ weather }) {
    return (
        <div className="weather-card">
            <h2>
                {weather.name}, {weather.sys.country}
            </h2>
            <p className="text">Temperature: {weather.main.temp}°C</p>
            <p className="text">Condition: {weather.weather[0].description}</p>
            <p className="text">Humidity: {weather.main.humidity}%</p>
            <p className="text">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
}

WeatherCard.propTypes = {
    weather: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sys: PropTypes.shape({
            country: PropTypes.string.isRequired,
        }).isRequired,
        main: PropTypes.shape({
            temp: PropTypes.number.isRequired,
            humidity: PropTypes.number.isRequired,
        }).isRequired,
        weather: PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
        wind: PropTypes.shape({
            speed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired
};

export default WeatherCard;