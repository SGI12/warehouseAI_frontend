
import { Logo } from "../Auth/styled";
import { RegistrationMainContainer } from "./styled"
import RegistrationCard from "@/components/registration-card/RegistrationCard";


const RegistrationPage = () => {
    
    return (
        <RegistrationMainContainer>
            <Logo>
                <img src={"./logo_big.svg"} alt="Logo" />
            </Logo>
            <RegistrationCard/>
        </RegistrationMainContainer>
    );
};

export default RegistrationPage;