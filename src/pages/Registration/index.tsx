import AuthCard from "@/components/auth-card/AuthCard";
import { Logo } from "../Auth/styled";
import { RegistrationMainContainer } from "./styled"


const RegistrationPage = () => {
    return (
        <RegistrationMainContainer>
            <Logo>
                <img src={"./logo_big.svg"} alt="Logo" />
            </Logo>
            <AuthCard/>
        </RegistrationMainContainer>
    );
};

export default RegistrationPage;