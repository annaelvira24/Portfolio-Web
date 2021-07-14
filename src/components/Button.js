import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

export const Button = styled.button`
    color: white;
    background: #0085AF;
    border-radius: 20px;
    padding: 20px 30px 20px 20px;
    border: none;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        background: #3F4648;
    }

    ${({ active }) => active && `
        background: #0085AF;
    `}
`;

const ButtonLarge = styled(Button)`
    width: 352px;
    min-height: 136px;
    font-size: 36px;
    font-weight: 700;
    margin-right: 40px;

    a{
        color: white;
        text-decoration: none;
    }

    @media only screen and (max-width: 1060px){
        margin-bottom: 10px;
        width: 30%;
        height: 180px;
        min-width: 170px;
        font-size: 24px;
        margin-right: 20px;
    }

    @media only screen and (max-width: 600px){
        width: 100%;
        max-width: 360px;
        margin-bottom: 10px;
        min-height: 90px;
        height: 90px;
    }
`

const Row = styled.div`
    display: flex;

    @media only screen and (max-width: 1060px){
        flex-direction: column;
    }

    @media only screen and (max-width: 600px){
        flex-direction: row;
    }
`;

const Column = styled.div`
    flex-basis: ${props => props.left ? '40%' : '60%'};
    display: flex;
    width: 100%;
    text-align: ${props => props.left ? 'center' : 'left'};
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1060px){
        flex-basis: 50%;
        text-align: center;
        padding-bottom: ${props => props.left ? '10px' : '0'};
    }

    @media only screen and (max-width: 600px){
        flex-basis: ${props => props.left ? '30%' : '70%'};
    }
`;

export function ButtonHomePage(props){
    return(
        <ButtonLarge>
            <Link to={props.location}>
            <Row>
                <Column left>
                    <FontAwesomeIcon icon = {props.icon} color="white" size="2x"/>
                </Column>
                <Column right>
                    <span>{props.text}</span>
                </Column>
            </Row>
            </Link>
        </ButtonLarge>
    )
}