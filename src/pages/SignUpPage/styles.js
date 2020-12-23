import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;

    /* responsivate */
    max-width: 600px;
    position: relative;
    margin: 0 auto;
`;
export const Header = styled.header``;

export const Button = styled.button`
    padding: 20px 30px;
    margin: 50px 10px 0;

    font-weight: bold;
    font-size: 1.6rem;
    color: #fff;
    background: linear-gradient(to left, #FE6847, #F45563);
    box-shadow: 1px 1px 5px #3336;
    border: none;
    border-radius: 5px;
    transition: all .5s ease;
    &:active { transform: scale(.9); background: linear-gradient(to right, #FE6847, #F45563)}

`;
export const LogoWrap = styled.div`
    margin: 15px 0;
    transform: scale(.85);

    color: #FF4242;
`;

// DO YOU LIKE MASSAGE
export const DoYouLikeMassageContainer = styled(motion.div)`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 0 15px;

    text-align: center;
    font-size: 1.5rem;
    color: #666;

    p:nth-child(2) { margin-top: 20px; font-size: 2rem; font-weight: bold;}

    div {
        display: flex;
        justify-content: center;
    }

`;

// GENDER
export const GenderContainer = styled(motion.div)`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 10px;

    p {
        text-align: center;
        font-size: 1.5rem;
        color: #666;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

// LOOKING FOR
export const LookingForContainer = styled(motion.div)`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 10px;

    p {
        text-align: center;
        font-size: 1.5rem;
        color: #666;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const CheckboxLookingFor = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-weight: bold;
        margin-bottom: 35px;
    }
`;

export const CheckboxButton = styled.button`
    padding: 15px 20px;
    margin-right: 10px;

    font-size: 1.2rem;
    border-radius: 5px;
    transition: all .2s ease;
    


    ${({ checked }) => (
        checked
            ? 'background-color: #000; border: 2px solid #fff; color: #fff;'
            : 'border: 2px solid #555; background-color: #fff; color: #555'
    )}
`;

// ADDRESS
export const AddressContainer = styled(motion.div)`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 10px;

    p {
        text-align: center;
        font-size: 1.5rem;
        color: #666;

        span {font-style: italic; color: #F45563; font-weight: bold;}
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    input {
        padding: 15px;
        max-width: 80%;
        margin: 0 auto;
        
        text-align: center;
        color: #666;
        font-size: 1.3rem;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 3px #0005;
    }
`;

// SIGNUP FINISHED
export const SignUpFinishedContainer = styled(motion.div)`
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 10px;

    p {
        text-align: center;
        font-size: 1.5rem;
        color: #666;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

//colors: F45563 FE6847 FF4242 