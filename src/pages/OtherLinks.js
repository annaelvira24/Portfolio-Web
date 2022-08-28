import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faBehanceSquare, faLine } from '@fortawesome/free-brands-svg-icons';
import { Title, SubTitle } from '../components/Text';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import Slide from 'react-reveal/Slide';

import Behance from '../assets/img/OtherLinks/behance.PNG';
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
    justify-content: flex-start;
`

const Column = styled.div`
    margin-left: 0px;
    margin-right: 10px;
`;

const Wrapper = styled.div`
    max-height: 1000px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media only screen and (max-width: 1060px){
        flex-direction: row;
        width: 100%;
        max-height: 100%;
        heigth: 100%;
    }
`;

const Item = styled.div`
    margin: 0 8% 30px 0;
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

    @media only screen and (max-width: 1060px){
        max-width: 100% !important;
    }
`;

class Other extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrolled: false,
            links: [
                {
                    icon: faInstagramSquare,
                    title: 'Follow my daily cooks',
                    linkText: 'instagram.com/annalelahngoding',
                    link: 'https://www.instagram.com/annalelahngoding/',
                    image: Ig
                },
                {
                    icon: faLine,
                    title: 'Explore My Sticker Sets',
                    linkText: 'store.line.me/stickershop/author/61052',
                    link: 'https://store.line.me/stickershop/author/61052/',
                    image: Sticker,
                    imageStyle: {maxWidth: "55%", maxHeight: "700px"}
                },
                {
                    icon: faBehanceSquare,
                    title: 'Find My Design Stuffs',
                    linkText: 'behance.net/annahartoyo',
                    link: 'https://www.behance.net/annahartoyo',
                    image: Behance,
                    imageStyle: {maxWidth: "55%", maxHeight: "700px"}
                }
            ]
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
                        <Wrapper>
                            { this.state.links.map(function(link, i) {
                                return (
                                    <Item key={'link-' + i}>
                                        <Row>
                                            <Column>
                                                <SocialIcon>
                                                    <a href={link.link} target="blank">
                                                        <FontAwesomeIcon icon={link.icon} className="fa-icon"/>
                                                    </a>
                                                </SocialIcon>
                                            </Column>

                                            <Column>
                                                <SocialTitle>
                                                    {link.title}
                                                </SocialTitle>
                                                <SocialLink>
                                                    <a href={link.link} target="blank">
                                                        {link.linkText}
                                                    </a>
                                                </SocialLink>
                                            </Column>
                                        </Row>
                                        <Row>
                                            <Image style = {link.imageStyle} src={link.image}/>
                                        </Row>
                                    </Item>
                                )
                            })}
                        </Wrapper>                    
                    </Slide>
                </Container>
                <Footer/>
            </div>
            
        )
    }
}

export default Other;