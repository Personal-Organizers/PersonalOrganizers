// import { Link } from "react-router-dom";

import { StyledRegisterPage } from "./style";
import RegisterForm from "../../components/Form/RegisterForm";
import backgroud from "../../assets/background1.jpg";
import { StyledContainerRegister, StyledGridBox } from "../../styles/grid";
import { StyledContainer } from "../../styles/background";
import { StyledLandingPage } from "../LandingPage/style";

export const RegisterPage = () => (
  <StyledLandingPage>
    <StyledRegisterPage>
      <h1 className="landingPageTitle1">Personal Organizers</h1>
      <StyledContainer>
        <img src={backgroud} alt="background" className="background" />
      </StyledContainer>
      <StyledContainerRegister>
        <div className="flexGrid">
          <div className="left"></div>
          <div className="right">
            <StyledGridBox className="formBox">
              <RegisterForm />
            </StyledGridBox>
          </div>
        </div>
      </StyledContainerRegister>
    </StyledRegisterPage>
  </StyledLandingPage>
);
