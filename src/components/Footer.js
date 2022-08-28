import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.div`
    background: #3F4648;
    min-height: 138px;
    display: flex;
    color: white;
    justify-content: center;
    flex-direction: column;

    p{
        margin-top: 20px;
        font-family: "Raleway";
        font-size: 18px;
        font-weight: 600;
    }
`;

const ContactsContainer = styled.div`
    display: flex;
    margin-top: 10px;
    text-align: center;
    justify-content: center;

    .fa-icon{
        text-align: center;
        font-size: 40px;
        cursor: pointer;
        margin-right: 15px;
        color: white !important;
        opacity: 0.8;
        transition: 0.3s;

        &:hover{
            opacity: 1;
        }
    }
`;

const contacts= [
    {
        link: 'mailto:naelvirahart@gmail.com',
        icon: faEnvelopeSquare
    },
    {
        link: 'https://github.com/annaelvira24',
        icon: faGithubSquare
    },
    {
        link: 'https://id.linkedin.com/in/annaelvira24',
        icon: faLinkedin
    }
]

export function Footer(){
    return(
        <FooterContainer>
            <ContactsContainer>
                { contacts.map(function(contact, i) {
                    return (
                        <a
                            key={'contact-footer-' + i}
                            href={contact.link}
                            target="blank"
                        >
                            <FontAwesomeIcon
                                icon={contact.icon}
                                className="fa-icon"
                            />
                        </a>
                    )
                })}
            </ContactsContainer>
            <br/>
            <p>
                Anna Elvira Hartoyo  •  2022
            </p>
        </FooterContainer>
    )
}