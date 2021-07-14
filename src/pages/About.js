import React from 'react';
import styled from 'styled-components';
import photo from '../assets/img/anna.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Title, SubTitle } from '../components/Text';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';

const Container = styled.div`
    margin: 120px 100px 60px 100px;

    @media only screen and (max-width: 1060px){
        margin: 120px 50px 10px 50px;
    }
`;

const Profile = styled.div`
    display: flex;
    margin-top: 30px;

    >.photo{
        flex-basis: 20%;
    }

    img{
        border-radius: 50%;
        filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));
        max-width: 250px;

    }

    >.desc{
        flex-basis: 80%;
        padding-left: 100px;
        padding-top: 20px;
        text-align: left;

        h3{
            color: #0085AF;
            font-size: 24px;
            margin-bottom: -15px;
        }

        span{
            color: #0085AF;
            font-size: 18px;
        }
    }

    @media only screen and (max-width: 1060px){
        flex-direction: column;
        justify-content: center;
        
        >.desc{
            text-align: center;
            padding-left: 0px;
        }

    }
`;

const Skills = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
`;

const CardsContainer = styled.div`
    display: flex;
    margin-top: -10px;
    justify-content: space-between;

    @media only screen and (max-width: 800px){
        flex-direction: column;
        margin-right: 40px;
    }
`;

const Card = styled.div`
    width: 247px;
    height: 235px;
    margin-right: 20px;
    padding: 40px;

    text-align: center;
    background: #E3F7FF;
    box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px;

    >.icon{
        margin-bottom: 10px;
    }

    >.title{
        font-family: "Raleway", sans-serif;
        font-size: 24px;
        font-weight: 700;
    }

    >.row{
        padding: 20px 8px 10px 8px;
        display: flex;
        justify-content: space-between;
        text-align: left;
    }

    >.column{
        flex-basis: 50%;
    }

    ul{
        margin: 0;
        padding-left: 0px;
        font-size: 16px;
        text-align: left;
    }

    li{
        list-style: none;
    }

    li:before {
        content:"·  ";
        font-size: 30px;
        font-weight: bolder;
        vertical-align: middle;
        line-height: 20px;
    }

    @media only screen and (max-width: 1060px){
        width: 100%;
        min-width: 120px;
        height: auto;
        padding: 40px 20px 20px 20px;

        >.row{
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 800px){
        margin-bottom: 20px;
        >.row{
            flex-direction: row;
            justify-content: space-evenly;
        }
        >.column{
            margin-left: 10px;
            margin-right: 10px;
        }
    }
`;

const Experiences = styled.div`
    display: flex;
    margin-top: 50px;
    flex-direction: column;
    font-family: "Raleway", sans-serif;
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    flex-basis: ${props => props.left ? '2%' : '98%'};
    text-align: ${props => props.left ? 'center' : 'left'};
    padding-left: ${props => props.left ? '20px' : '0'};
    padding-right: ${props => props.left ? '20px' : '0'};
    display: flex;
    flex-direction: column;

    h3{
        margin-top: -5px;
        margin-bottom: -5px;
        font-size: 24px;
        font-weight: 700;
    }

    p{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    @media only screen and (max-width: 800px){
        padding-left: ${props => props.left ? '10px' : '0'};

        h3{
            font-size: 20px;
        }

        p{
            font-size: 14px;
        }
    }
`;

const Bullet = styled.div`
    background: #0085AF;
    border-radius: 50%;
    width: 20px;
    height: 20px;
`;

const Divider = styled.div`
    background: #0085AF;
    height: 100px;
    width: 4px;
    margin-left: 8px;

    @media only screen and (max-width: 600px){
        height: ${props => props.long ? '150px' : '100px'};
    }
`;

class About extends React.Component{
    render(){
        return(
            <div>
            <NavBar/>
            <Container>
                <Title>
                    About Me
                </Title>
                <Profile>
                    <div className="photo">
                        <img src={photo}/>
                    </div>
                    <div className="desc">
                        <h3>Anna Elvira Hartoyo</h3>
                        <br/>
                        <span>Bandung, Indonesia</span>
                        <p>
                            My name is Anna Elvira Hartoyo, an undergraduate informatics engineering student in Bandung Institute of Technology (2018-2022).
                            Neither a programmer nor a graphic designer, I'm just an ordinary girl who attracted to visual arts. 
                            I fell in love with art since I was a kid. But since technology is growing rapidly nowadays, 
                            I decided to take this major and I'd love to combine art and technology.
                        </p>
                    </div>
                </Profile>
                <Skills>
                    <SubTitle>
                        Technical Skills
                    </SubTitle>
                    <CardsContainer>
                        <Card>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCode} size={"3x"}/>
                            </div>
                            <span className="title">Programming Language</span>
                            <div className="row">
                                <div className="column">
                                    <ul>
                                        <li>Python</li>
                                        <li>C</li>
                                        <li>C++</li>
                                        <li>C#</li>
                                        <li>Java</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <ul>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>PHP</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <FontAwesomeIcon icon={faCogs} size={"3x"}/>
                            </div>
                            <span className="title">Frameworks & Technologies</span>
                            <div className="row">
                                <div className="column">
                                    <ul>
                                        <li>React JS</li>
                                        <li>Node JS</li>
                                        <li>Bootstrap</li>
                                        <li>SQL</li>
                                    </ul>
                                </div>
                                <div className="column">
                                    <ul>
                                        <li>Flask</li>
                                        <li>Linux</li>
                                        <li>Git</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="icon">
                                <FontAwesomeIcon icon={faPalette} size={"3x"}/>
                            </div>
                            <span className="title">Design Tools</span>
                            <div className="row center">
                                <ul>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe Premiere Pro</li>
                                    <li>Adobe XD</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </Card>
                    </CardsContainer>
                </Skills>            
                <Experiences>
                    <SubTitle>Experiences</SubTitle>
                    <Row>
                        <Column left>
                            <Bullet/>
                            <Divider/>
                        </Column>
                        <Column right>
                            <h3>Frontend Developer Intern</h3>
                            <p>Transfree • Jun 2021 - Present</p>
                        </Column>
                    </Row>
                    <Row>
                        <Column left>
                            <Bullet/>
                            <Divider long/>
                        </Column>
                        <Column right>
                            <h3>Computational Science and Engineering Laboratory Assistant</h3>
                            <p>Institut Teknologi Bandung   •   Agu 2020 - Present</p>
                        </Column>
                    </Row>
                    <Row>
                        <Column left>
                            <Bullet/>
                            <Divider/>
                        </Column>
                        <Column right>
                            <h3>Head of Design</h3>
                            <p>Arkavidia 7.0 •   Jul 2020 - Apr 2021</p>
                        </Column>
                    </Row>

                    <Row>
                        <Column left>
                            <Bullet/>
                            <Divider/>
                        </Column>
                        <Column right>
                            <h3>Design Team Leader</h3>
                            <p>Codemy HMIF ITB   •   Apr 2020 - Des 2020</p>
                        </Column>
                    </Row>

                    <Row>
                        <Column left>
                            <Bullet/>
                        </Column>
                        <Column right>
                            <h3>Head of Creative Media</h3>
                            <p>ITBMUN 2020 • May 2019 - Feb 2020</p>
                        </Column>
                    </Row>
                </Experiences>
            </Container>
            <Footer/>
            </div>
        )
    }
}

export default About;