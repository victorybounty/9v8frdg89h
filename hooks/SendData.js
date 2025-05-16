import axios from "axios"

function SendData(params) {
    axios.post(`https://harmonious-stormy-peacock.glitch.me/create/user`, params)

}

export default SendData