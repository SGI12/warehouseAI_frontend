
import { RegistrationMainContainer } from "@/components/containers/containers";
import { LogoBig } from "@/components/logo/logo";
import RegistrationCard from "@/components/registration-card/RegistrationCard";
import Image from "next/image";


const RegistrationPage = () => {
   
    return (
        <RegistrationMainContainer>
            <LogoBig>
                <Image width={197} priority={true} height={197} src={"./logo_big.svg"} alt="Logo" />
            </LogoBig>
            <RegistrationCard/>
        </RegistrationMainContainer>
    );
};

export default RegistrationPage;