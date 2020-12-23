import styled from 'styled-components';
import bgImage from '../../img/padrinho-photo.png';
import {motion} from 'framer-motion';

export const Container = styled(motion.div)`
    min-width: 100vw;
    min-height: 100vh;
    
    color: #fff;
    background-image: url(${bgImage});
    background-size: cover;
    background-attachment: fixed;
    
`;

export const WrapperBg = styled.div`
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    padding: 20px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    background-color: #f00b;
    text-align: center;

    h1 {
        font-size: 3rem;
        span { font-size: 2rem; font-weight: normal;}
    }

    p {
        font-size: 1.2rem;
        line-height: 2;
    }
`;

export const LogoWrapper = styled.div`
    margin: 30px 0;
`;

export const CTA = styled.button`
    padding: 25px 10px;
    margin: 40px 0;

    background-color: #fff;
    font-weight: bold;
    color: #FF4242;
    font-size: 2rem;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 1px 5px #0005;
`;

/* F45563 FF4242 FE6847 */