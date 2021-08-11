import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faBehanceSquare, faBlogger, faLine } from '@fortawesome/free-brands-svg-icons';
import { Title, SubTitle } from '../components/Text';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import Slide from 'react-reveal/Slide';

import Behance from '../assets/img/OtherLinks/behance.PNG';
import Behance2 from '../assets/img/OtherLinks/behance2.PNG';
import Blog from '../assets/img/OtherLinks/blog.PNG';
import Ig from '../assets/img/OtherLinks/ig.png';
import Sticker from '../assets/img/OtherLinks/sticker.jpg';


const Container = styled.div`
    margin: 120px 100px 60px 100px;

    @media only screen and (max-width: 1060px){
        margin: 120px 50px 10px 50px;
    }

    @media only screen and (max-width: 768px){
        margin: 120px 25px 10px 25px;
    }
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 10px;

    @media only screen and (max-width: 800px){
        flex-direction: ${({ main }) => main ? 'column' : 'row'};
        justify-content: flex-start;
    }
`

const Column = styled.div`
    margin-left: 0px;
    margin-right: 10px;
    flex-basis: 50%;

    @media only screen and (max-width: 768px){
        ${({ main }) => main && `
            margin-bottom: 20px;
        `
    }
`;

const SocialIcon = styled.div`
    .fa-icon{
        text-align: left;
        font-size: 60px;
        cursor: pointer;
        margin-right: 15px;
        color: #0085AF !important;
        transition: 0.3s;

        &:hover{
            opacity: 0.8;
        }
`;

const SocialTitle = styled(SubTitle)`
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 24px;

    @media only screen and (max-width: 600px){
        font-size: 20px;
    }
`

const SocialLink = styled.p`
    text-align: left;
    margin-top: 0px;

    a{
        text-decoration: none;
        color: #3F4648;
        font-family: "Raleway";
        font-size: 20px;
        font-weight: 500;
        margin-top: 0px;
        cursor: pointer;
        margin-left: 0px;
        transition: 0.3s;

        &: hover{
            color: #0085AF;
        }
    }

    @media only screen and (max-width: 600px){
        a{
            font-size: 16px;
        }
    }
`;

const Image = styled.img`
    max-width: 100%;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;

    @media only screen and (max-width: 600px){
        max-width: 100%;
    }
`;

class Other extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled: false
        }
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const isScroll = window.scrollY < 80 ? false : true;
    
          this.setState({ scrolled: isScroll });
        });
      }

    render(){
        return(
            <div>
                <NavBar 
                    scrolled = {this.state.scrolled}
                    active = {"other"}
                />
                <Container>
                    <Slide bottom>
                    <Title>
                        Other Links
                    </Title>
                    <Row main = {true}>
                        <Column main = {true} style={{flexBasis:"40%"}}>
                            <Row>
                                <Column style = {{flexBasis: "10%"}}>
                                    <SocialIcon>
                                        <a href="" target="blank">
                                            <FontAwesomeIcon icon={faInstagramSquare} className="fa-icon"/>
                                        </a>
                                    </SocialIcon>
                                </Column>

                                <Column style = {{flexBasis: "90%"}}>
                                    <SocialTitle>
                                        Follow my daily cooks
                                    </SocialTitle>
                                    <SocialLink>
                                        <a>
                                            Coming soon!
                                        </a>
                                    </SocialLink>
                                </Column>
                            </Row>
                            <Row>
                                <Image style = {{maxWidth: "80%"}} src={Ig}/>
                            </Row>
                        </Column>

                        <Column main = {true} style={{flexBasis:"60%"}}>
                            <Row>
                                <Column  style = {{flexBasis: "10%"}}>
                                    <SocialIcon>
                                        <a href="https://store.line.me/stickershop/author/61052/" target="blank">
                                            <FontAwesomeIcon icon={faLine} className="fa-icon"/>
                                        </a>
                                    </SocialIcon>
                                </Column>

                                <Column style = {{flexBasis: "90%"}}>
                                    <SocialTitle>
                                        Explore My Sticker Sets
                                    </SocialTitle>
                                    <SocialLink>
                                        <a href="https://store.line.me/stickershop/author/61052/en" target="blank">
                                            store.line.me/stickershop/author/61052
                                        </a>
                                    </SocialLink>
                                </Column>
                            </Row>
                            <Row>
                                <Image src={Sticker}/>
                            </Row>

                            <Row style = {{marginTop: "20px"}}>
                                <Column  style = {{flexBasis: "10%"}}>
                                    <SocialIcon>
                                        <a href="https://www.behance.net/annahartoyo" target="blank">
                                            <FontAwesomeIcon icon={faBehanceSquare} className="fa-icon"/>
                                        </a>
                                    </SocialIcon>
                                </Column>

                                <Column style = {{flexBasis: "90%"}}>
                                    <SocialTitle>
                                        Find my design stuffs
                                    </SocialTitle>
                                    <SocialLink>
                                        <a href="https://www.behance.net/annahartoyo" target="blank">
                                            behance.net/annahartoyo
                                        </a>
                                    </SocialLink>
                                </Column>
                            </Row>
                            <Row>
                                <Image src={Behance}/>
                            </Row>
                        </Column>
                    </Row>
                    </Slide>

                    {/* <Slide bottom>
                    <Row main={true} style={{marginTop: "40px"}}>
                        <Column main = {true} style = {{flexBasis: "50%"}}>
                            <Row>
                                <Column style = {{flexBasis: "10%"}}>
                                    <SocialIcon>
                                        <a href="https://storytellingforsleep.blogspot.com/" target="blank">
                                            <FontAwesomeIcon icon={faBlogger} className="fa-icon"/>
                                        </a>
                                    </SocialIcon>
                                </Column>

                                <Column style = {{flexBasis: "90%"}}>
                                    <SocialTitle>
                                        Read my random stories
                                    </SocialTitle>
                                    <SocialLink>
                                        <a href="https://storytellingforsleep.blogspot.com/" target="blank">
                                            storytellingforsleep.blogspot.com
                                        </a>
                                    </SocialLink>
                                </Column>
                            </Row>
                            <Row>
                                <Image src={Blog}/>
                            </Row>
                        </Column>
                        <Column>
                            <Row>
                                <Column style = {{flexBasis: "10%"}}>
                                    <SocialIcon>
                                        <a href="https://www.behance.net/annahartoyo" target="blank">
                                            <FontAwesomeIcon icon={faBehanceSquare} className="fa-icon"/>
                                        </a>
                                    </SocialIcon>
                                </Column>

                                <Column style = {{flexBasis: "90%"}}>
                                    <SocialTitle>
                                        Find my design stuffs
                                    </SocialTitle>
                                    <SocialLink>
                                        <a href="https://www.behance.net/annahartoyo" target="blank">
                                            behance.net/annahartoyo
                                        </a>
                                    </SocialLink>
                                </Column>
                            </Row>
                            <Row>
                                <Image src={Behance}/>
                            </Row>
                        </Column>
                    </Row>
                    </Slide> */}
                </Container>
                <Footer/>
            </div>
            
        )
    }
}

export default Other;