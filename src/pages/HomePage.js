import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faUserCircle, faGlobe, faCopy} from '@fortawesome/free-solid-svg-icons';
import { ButtonHomePage } from '../components/Button';
import avatar from '../assets/img/anna-avatar.svg';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
    margin: 30px 60px 10px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 90vh;

    @media only screen and (max-width: 600px){
        margin: 30px 10px 10px 10px;
    }
`;

const Hero = styled.div`
    display: flex;
    margin-bottom: 15px;

    >.title{
        margin: 10px 0px 0px 50px;
        flex-basis: 55%;
        text-align: left;
        font-size: 36px;
        min-width: 320px;
    }

    >.contact{
        margin-right: 5px;
        cursor: pointer;
        width: 1px;
    }

    span{
        font-family: "Raleway";
        font-size: 36px;
        font-weight: 500;
        color: #0085AF;
    }

    >.image{
        flex-basis: 45%;
        margin-right: 50px;
    }

    img{
        max-width: 500px;
    }

    @media only screen and (max-width: 1060px){
        flex-direction: column-reverse;
        margin-bottom: 60px;

        >.title{
            margin: 0 auto;
            margin-top: -60px;
            text-align: center;
        }

        >.image{
            flex-basis: 45%;
            margin: 0;
        }

        img{
            width: 100%;
        }
    }

    @media only screen and (max-width: 600px){
        flex-direction: column-reverse;

        >.title{
            font-size: 24px;
        }

        h1{
            margin-bottom: 50px;
        }

        span{
            font-size: 24px;
        }
    }
`;

const ContactsContainer = styled.div`
    height: 10px;
    display: flex;
    margin-top: 20px;
    text-align: center;

    .fa-icon{
        text-align: center;
        font-size: 50px;
        cursor: pointer;
        margin-right: 15px;
        color: #0085AF !important;
        transition: 0.3s;

        &:hover{
            opacity: 0.8;
        }
    }

    @media only screen and (max-width: 1060px){
        margin-left: 33%;
        text-align: center;
    }

    @media only screen and (max-width: 600px){
        .fa-icon{
            font-size: 40px;
        }

        margin-left: 31%;
        text-align: center;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    margin: 5px 0px 0px 30px;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1060px){
        margin: 5px 5px 0px 20px;
     }
     
    @media only screen and (max-width: 600px){
       flex-direction: column;
       margin: 5px 10px 0px 20px;
    }
`;

class HomePage extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
            contacts: [
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
            ],
            menu: [
                {
                    path: '/about',
                    icon: faUserCircle,
                    text: 'ABOUT ME' 
                },
                {
                    path: '/portfolio',
                    icon: faCopy,
                    text: 'PORT FOLIO' 
                },
                {
                    path: '/other',
                    icon: faGlobe,
                    text: 'OTHER LINKS' 
                },
            ]
        }
    }
    render(){
        return(
            <Fade>
                <Container>
                    <Hero>
                        <div className="title">
                            <h1 style = {{marginTop: "70px"}}>Hello. I'm Anna.</h1>
                            <div style = {{marginTop: "-50px"}}>
                            <Typewriter className="type"
                                style = {{color: "red"}}
                                options={{
                                    strings: ['Frontend Engineer', 'Graphic Designer', 'UI/UX Enthusiast'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            </div>
                            <ContactsContainer>
                                {this.state.contacts.map(function(contact, i){
                                    return (
                                        <a
                                            href={contact.link}
                                            target="blank"
                                            key={'contacts-' + i}
                                        >
                                            <FontAwesomeIcon
                                                icon={contact.icon}
                                                className="fa-icon"
                                            />
                                        </a>
                                    );
                                })}
                            </ContactsContainer>
                        </div>
                        <div className="image">
                            <img src={avatar} alt="avatar"/>
                        </div>
                    </Hero>
                    <ButtonsContainer>
                        { this.state.menu.map(function(menu, i) {
                            return ( 
                                <ButtonHomePage
                                    key={'menu-' + i}
                                    location={menu.path}
                                    icon={menu.icon}
                                    text={menu.text}
                                />
                            )
                        })}
                    </ButtonsContainer>
                </Container>
            </Fade>
        )
    }
}

export default HomePage;
