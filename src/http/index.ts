
import axios from "axios";


export const isUser = async () => {
    let result = false;
    await axios.get('https://api.warehousai.com/api/auth/whoami', {
        withCredentials: true
    }
    
    )
    .then((res) => {
        if (res.status === 20)
            result = true

    })
    .catch((err) => {
        console.log(err.response?.data)
    })
    return result

}








 