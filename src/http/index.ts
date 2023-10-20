
import axios from "axios";


export const isUser = async () => {
    const result = await axios.get('https://api.warehousai.com/api/auth/whoami', {
        withCredentials: true
    }
    
    )
    .then((res) => {
        if (res.status === 200)
            {
                return true
            }
        else 
            {
                return false
            }


    })
    .catch((err) => {
        console.log(err.response?.data)
    })
    console.log('RESPONSE: ', result)
    return result
}






 