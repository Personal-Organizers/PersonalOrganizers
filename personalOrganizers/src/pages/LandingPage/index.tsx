import { StyledDescription, StyledLandingPage } from "./style";
import background from "../../assets/background1.jpg";
import {
  StyledBtnCadastro,
  StyledBtnLogin,
} from "../../components/Buttons/style";
import { useNavigate } from "react-router-dom";
import { StyledContainer } from "../../styles/background";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <StyledLandingPage>
      <h1 className="landingPageTitle1">Personal Organizers</h1>
      <StyledContainer>
        <img className="background" src={background} alt="background" />
        <StyledDescription>
          <div className="landingPageTitle">
            <h3>Que tal colocar suas tarefas em dia com a gente</h3>
          </div>
          <div className="btns">
            <StyledBtnLogin
              className="ladingPageBtnLogin"
              onClick={() => navigate("/login")}
            >
              Login
            </StyledBtnLogin>
            <div className="ladingPageRegisterBtn">
              <p className="landingPageDescription">Ainda não tem uma conta?</p>
              <StyledBtnCadastro
                className="ladingPageBtnRegister"
                onClick={() => navigate("/register")}
              >
                Cadastre-se
              </StyledBtnCadastro>
            </div>
          </div>
        </StyledDescription>
      </StyledContainer>
    </StyledLandingPage>
  );
};
