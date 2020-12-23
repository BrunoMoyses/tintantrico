import styled from 'styled-components';
import {motion} from 'framer-motion';
import {IoCloseOutline} from 'react-icons/io5';
import {IoIosHeartEmpty} from 'react-icons/io';
import {ImHeartBroken} from 'react-icons/im';

export const Container = styled.div`
    max-width: 600px;
    height: 100vh;
    max-height: 1200px;
    position: relative;
    margin: 0 auto;
`;

export const LogoWrapper = styled.div`
    padding: 20px;
    
    text-align: center;
    font-size: 1rem;
    color: #000a;
    
    span {font-weight: bold; color: #F45563;}
`;

export const PersonWrapper = styled.div`
    width: 85%;
    padding-top: 10px;
    margin: 0 auto;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px #0005;
`;

export const Person = styled(motion.div)`
    width: 110%;
    position: absolute;

    border-radius: 5px;

    ${({current}) => current ? 'box-shadow: 0 0 20px #0007;' : null}

    img {
        width: 100%;
        border-radius: 5px;
    }
`;

export const PersonInfo = styled.div`
    position: absolute;
    bottom: 0;
    padding: 15px;
    width: 100%;

    color: #fff;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    background: linear-gradient(to top, #000, transparent);
    /* text-shadow: 0 0 20px #000; */

    span {font-size: 1.5rem; font-weight: normal;}
    p {
        margin-top: 6px;
    }

`;

export const Controls = styled.div`
    width: 100%;
    position: absolute;
    bottom: 20px;
    display: flex;
    justify-content: center;    
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    font-size: 2.5rem;
    border: none;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0 0 20px #0006;
    transition: all .2s ease;
    
    &:active {
        ${({btnNope}) => btnNope ? 'transform: scale(1.4) rotate(-35deg);' : null }
        ${({btnLike}) => btnLike ? 'transform: scale(1.4) rotate(35deg);' : null }
    }
    &:first-child {margin-right: 50px;}

    ${({btnNope}) => btnNope ? 'background-color: #ffcb05; box-shadow: 0 0 20px #ffcb05' : null }
    ${({btnLike}) => btnLike ? 'background-color: #F45563; box-shadow: 0 0 20px #F45563;' : null }
`;

export const NopeIcon = styled(IoCloseOutline)``;

export const LikeIcon = styled(IoIosHeartEmpty)``;

export const IsOverIcon = styled(ImHeartBroken)``;

export const DailyLikesIsOver = styled.div`
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    
    background: linear-gradient(to bottom, #0007 50%, #FF4242 );
    border-radius: 10px;

    p{
        margin-top: 40px;
        text-align: center;
        color: #fff;
    }

    ${IsOverIcon} {
        color: #FF4242;
        font-size: 3rem;
    }

`;

export const CloseIcon = styled(IoCloseOutline)``;

export const TantricMatch = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    
    text-align: center;
    color: #fff;
    
    div:nth-child(1) {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 10px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        
        backdrop-filter: blur(5px);
        background-color: #000a;
        text-shadow: 0 0 20px #000a;
        
        h1 {
            margin-bottom: 40px;
            font-family: 'Dancing Script', cursive;
            font-size: 4rem;

            span {display: block; font-size: 5rem; color: #FF4242;}
        }
        p {
            font-size: 1.3rem;

            span {font-weight: bold; color: #FF4242;}
        }
    }

    img {
        height: 100%;
    }

    ${CloseIcon} {
        position: absolute;
        top: 20px;
        right: 20px;

        font-size: 2rem;
        color: #aaa;
    }
`;

// INTENTIO PRIMA SEMPER
export const IntentioPrimaSemper = styled.div`
    width: 95vw;
    padding: 10px;

    background: linear-gradient(#f00, #FF4242);
    text-align: center;
    border-radius: 10px;
    text-shadow: 0 0 15px #000a;

    p {
        margin: 25px 0;

        font-size: 1.2rem;
    }
    h1 {font-size: 2.1rem;}
    button {
        padding: 15px 20px;
        
        font-size: 1.5rem;
        border: none;
        border-radius: 10px;
        background-color: #000;
        color: #FF4242;
        transition: all .2s ease;

        &:active {
            transform: scale(0.9);
        }
    }
`;


//colors: FF4242 F45563 FE6847 