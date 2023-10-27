
import axios from "axios";


export const isUser = async () => {

    await axios.get('https://api.warehousai.com/api/auth/whoami', {
        withCredentials: true
    }
    
    )
    .then((res) => {
        if (res.status === 200)
            console.log(res.status)

    })
    .catch((err) => {
        console.log(err.response?.data)
    })

}








 