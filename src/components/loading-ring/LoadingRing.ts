import styled from "styled-components";
import { spinningLoadingRing } from "../animations/animations";





export const LoadingRing = styled.div`


  display: inline-block;
  width: 53px;
  height: 53px;


&:after {
  content: " ";
  display: block;
  width: 53px;
  height: 53px;
  border-radius: 50%;
  border: 6px solid #E64C8F;
  border-color: #E64C8F transparent #E64C8F transparent;
  animation: ${spinningLoadingRing} 1.2s linear infinite;
}
`