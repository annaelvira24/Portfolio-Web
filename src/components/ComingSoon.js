import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 600px;

    .icon{
        width: 400px;
    }

`;

export function ComingSoon(){
    return(
        <Container>
            <FontAwesomeIcon size={'4x'} icon={faTools}/>
            <h2>Coming soon...</h2>
        </Container>
    )
}