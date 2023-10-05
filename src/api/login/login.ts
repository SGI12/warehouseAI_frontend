import axios from "axios";

export const AuthUser = async (data:any) => {
    
    await axios.post('http://217.25.95.4:8010/auth/login', data, {
        headers: {
            'Content-Type': 'application/json',
          }
    }
    
    )
    .then((res) => {
        if (res.status == 200)
            console.log('OKJ')

    })
    .catch((err) => {
        console.log(JSON.parse(err.response?.data))
    })
}