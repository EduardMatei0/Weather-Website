const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/a52c3ae90241ae30bc3ef27b95508b34/${latitude},${longitude}`;

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + 
            ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.\n' + 
             ' Also temperature high is ' + body.daily.data[0].temperatureHigh + ' fahrenheight degrees ' + 
             ' and temperature low is ' + body.daily.data[0].temperatureLow + ' fahrenheight degrees.');
        }
    })
}

module.exports = forecast;