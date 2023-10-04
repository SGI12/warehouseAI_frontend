
import { LogoBig } from "../Auth/styled";
import { RegistrationMainContainer } from "./styled"
import RegistrationCard from "@/components/registration-card/RegistrationCard";


const RegistrationPage = () => {
    
    return (
        <RegistrationMainContainer>
            <LogoBig>
                <img src={"./logo_big.svg"} alt="Logo" />
            </LogoBig>
            <RegistrationCard/>
        </RegistrationMainContainer>
    );
};

export default RegistrationPage;