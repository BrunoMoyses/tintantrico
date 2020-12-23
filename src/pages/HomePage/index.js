import {useHistory} from 'react-router-dom';
import {
    Container,
    WrapperBg,
    CTA,
    LogoWrapper,
} from './styles';
import Logo from '../../components/Logo';

const Home = () => {
    const history = useHistory();

    return (
        <Container
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <WrapperBg>
                <h1>Fala Comigo<br/><span>Maravilha TANTRICAA!</span></h1>

                <LogoWrapper>
                    <Logo />
                </LogoWrapper>

                <p>Bem vindo(a) à melhor comunidade de <b>Tubarões</b> e <b>Deusas</b> buscando<br/>TROCAR PRESENÇA e COMTEMPLAÇÃO</p>
                <CTA
                    onClick={ () => history.push('/signup')}
                >CADASTRE-SE</CTA>
            </WrapperBg>
        </Container>
    )
}

export default Home;