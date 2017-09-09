import axios from 'axios';
const API_KEY = '99f9a23284009105a3085b887adfe47d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    // console.log(url);
    const request = axios.get(url);
    // console.log('request send' + request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}