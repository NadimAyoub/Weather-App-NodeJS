const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=377e501d19eeedcb0c6a45e8c63dea16&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            console.log(body)
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. It feels Like ' + body.current.feelslike + '. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast