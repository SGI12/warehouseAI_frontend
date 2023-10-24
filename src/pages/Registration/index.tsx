
import { RegistrationMainContainer } from "@/components/containers/containers";
import { LogoBig } from "@/components/logo/logo";
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