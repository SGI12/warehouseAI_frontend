import axios from "axios";

export const AuthUser = async (data:any) => {
    
    await axios.post('http://217.25.95.4:8010/auth/register', data, {
        headers: {
            'Content-Type': 'application/json',
          }
    }
    
    )
    .then((res) => {
        const response = JSON.parse(res.data);
        console.log(response)

    })
    .catch((err) => {
        console.log(err.response.data)
    })
}