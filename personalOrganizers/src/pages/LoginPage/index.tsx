import { useNavigate } from 'react-router-dom';
import backgroud from '../../assets/background1.jpg';
import { LoginForm } from '../../components/Form/LoginForm';
import { StyledLoginPage, StyledLoginPageContainer } from './style';

export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <h1 className='loginPageTitle1'>Personal Organizers</h1>
            <StyledLoginPageContainer>
                <img src={backgroud} alt='background' className='loginPageBackground' />
            </StyledLoginPageContainer>
            <div className='loginForm'>
                <LoginForm />
            </div>
        </StyledLoginPage>
    )
}