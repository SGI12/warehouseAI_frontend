import { AiDescriptionContainer } from "@/components/containers/containers";
import Header from "@/components/header/header"
import { useUserContext } from "@/context"
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";


const AiDescriptionPage = () => {
    const {setIsUser} = useUserContext()
    const router = useRouter()
    useEffect(() => {
    const apiUrl = 'https://api.warehousai.com/api/auth/whoami';
      axios.get(apiUrl, {withCredentials: true})
      .then((res) => {
        if (res.status === 200) {
            setIsUser(true);
        }
        else 
            router.push('/authpage')
      })
      .catch((err) => {
        console.log(err.response?.data)
    });
    });
    return (
        <AiDescriptionContainer>
            <Header/>
        </AiDescriptionContainer>
    )
}

export default AiDescriptionPage