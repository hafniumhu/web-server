const request = require("postman-request");

const forecast = (lat, long, callback) => {
    const url =
        "http://api.weatherstack.com/current?access_key=6ae630fce9a1fe8cb6d82c8748284ddb&query=" +
        lat +
        "," +
        long +
        "&units=m";

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Cannot connect to weather service", undefined);
        } else if (response.body.error) {
            callback("Unable to find location", undefined);
        } else {
            callback(
                undefined,
                `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees.`
            );
        }
    });
};

module.exports = forecast;
