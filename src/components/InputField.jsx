import PropTypes from "prop-types";

function InputField({city, setCity, fetchWeather}) {
    return (
        <div className="input-field">
            <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={fetchWeather}>Get Weather</button>
        </div>
    );
}

InputField.propTypes = {
    city: PropTypes.string.isRequired,
    setCity: PropTypes.func.isRequired,
    fetchWeather: PropTypes.func.isRequired,
};

export default InputField