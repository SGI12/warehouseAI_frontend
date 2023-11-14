
import { LoaderContainer } from "../containers/containers"
import { LoaderSpinner, LoaderText } from "./styled"
import { motion } from "framer-motion"




const Loader = () => {
    return (
        <LoaderContainer>
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
              }
            }}  
              >
            <LoaderSpinner src={'/logo_big.svg'} alt="spinne" width={235} height={235}/>
            </motion.div>

            
        </LoaderContainer>
    )
}

export default Loader