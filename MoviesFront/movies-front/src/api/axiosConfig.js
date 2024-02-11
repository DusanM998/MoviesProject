import axios from 'axios';

export default axios.create({
    baseURL: "https://9x96-103-106-239-104.ap.ngrok.io",
    headers: {"ngrok-skip-browser-warning": "true"}
})