
import axios from "axios";

export const isUser = async () => {
    let isLoggedIn = false
    await axios.get('http://217.25.95.4:8010/auth/whoami', {
        withCredentials: true
    }
    
    )
    .then((res) => {
        if (res.status == 200)
            console.log('true')

    })
    .catch((err) => {
        console.log(err.response?.data)
    })
    return isLoggedIn
}


 