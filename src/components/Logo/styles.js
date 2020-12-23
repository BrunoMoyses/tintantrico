import styled from 'styled-components';
import {FaPhoenixFramework} from 'react-icons/fa';

export const Container = styled.div`
    font-family: 'Varela Round', sans-serif;
    text-align: center;

    p{font-size: 1.2rem;}

`;

export const PhoenixIcon = styled(FaPhoenixFramework)`
    font-size: 4rem;
    transform: rotate(-78deg) translateY(-5px);
    
    ${ ({reverse}) => reverse ? `transform: scaleX(-1) rotate(-78deg) translateY(-5px);` : null }
`;