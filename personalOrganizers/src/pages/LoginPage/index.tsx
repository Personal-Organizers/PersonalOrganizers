import backgroud from "../../assets/background1.jpg";
import { LoginForm } from "../../components/Form/LoginForm";
import { StyledContainer } from "../../styles/background";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <h1 className="loginPageTitle1">Personal Organizers</h1>
      <StyledContainer>
        <img src={backgroud} alt="background" className="background" />
      </StyledContainer>
      <div className="loginForm">
        <LoginForm />
      </div>
    </StyledLoginPage>
  );
};
