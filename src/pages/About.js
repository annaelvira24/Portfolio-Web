import React from 'react';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import photo from '../assets/img/anna.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faPalette } from '@fortawesome/free-solid-svg-icons';
import { Title, SubTitle } from '../components/Text';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import Slide from 'react-reveal/Slide';

const Container = styled.div`
    margin: 120px 100px 60px 100px;

    @media only screen and (max-width: 1060px){
        margin: 120px 50px 10px 50px;
    }

    @media only screen and (max-width: 768px){
        margin: 120px 25px 10px 25px;
    }
`;

const Profile = styled.div`
    display: flex;
    margin-top: 30px;

    >.profile-pic{
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

    p {
        line-height: 28px;
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
    margin-top: 160px;
    flex-direction: column;

    @media only screen and (max-width: 800px){
        margin-top: 50px;
    }
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
    width: 30%;
    max-height: 235px;
    margin-right: 20px;
    padding: 40px;
    box-shadow: 0px 8px 4px 3px rgba(0, 0, 0, 0.1);

    text-align: center;
    background: #E3F7FF;
    border-radius: 20px;
    transition: 0.3s;

    &:hover{
        box-shadow: 0px 8px 8px 3px rgba(0, 0, 0, 0.25);
    }

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
        // justify-content: space-between;
        text-align: left;
        max-height: 120px;
        flex-direction: column;
        flex-wrap: wrap;
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
            justify-content: space-evenly;
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
    margin-top: 100px;
    flex-direction: column;
    font-family: "Raleway", sans-serif;

    @media only screen and (max-width: 800px){
        margin-top: 50px;
    }
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

    constructor(props){
        super(props);
        this.state = {
            scrolled: false,
            skills: [
                {
                    title: 'Programming Language',
                    icon: faCode,
                    items: ['Python', 'C', 'C++', 'C#', 'Java', 'HTML', 'CSS', 'Javascript', 'PHP']
                },
                {
                    title: 'Frameworks & Technologies',
                    icon: faCogs,
                    items: ['ReactJS', 'VueJS', 'NodeJS', 'Bootstrap', 'SQL', 'Flask', 'Linux', 'Git']
                },
                {
                    title: 'Design Tools',
                    icon: faPalette,
                    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe XD', 'Figma']
                }
            ],
            experiences: [
                {
                    title: 'Frontend Engineer',
                    desc: 'Shopee Indonesia • Aug 2022 - Present'
                },
                {
                    title: 'Software Engineer Intern',
                    desc: 'Prosa.ai • Aug 2021 - Jun 2022'
                },
                {
                    title: 'Frontend Developer Intern',
                    desc: 'Transfree • Jun - Aug 2021'
                },
                {
                    title: 'Computational Science and Engineering Laboratory Assistant',
                    desc: 'Institut Teknologi Bandung • Agu 2020 - Jun 2022'
                },
                {
                    title: 'Design Team Leader',
                    desc: 'Codemy HMIF ITB   •   Apr 2020 - Des 2020'
                },
                {
                    title: 'Head of Creative Media',
                    desc: 'ITBMUN 2020 • May 2019 - Feb 2020',
                    last: true
                },
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
                active = {"about"}
            />
            <Container>
                <Slide bottom>
                    <Title>
                        About Me
                    </Title>
                    <Profile>
                        <div className="profile-pic">
                            <img src={photo} alt="profile-pic" />
                        </div>
                        <div className="desc">
                            <h3>Anna Elvira Hartoyo</h3>
                            <br/>
                            <span>Bandung, Indonesia</span>
                            <p>
                                My name is Anna Elvira Hartoyo, an Informatics Engineering graduate from Bandung Institute of Technology (2018-2022).
                                Currently I am working as a software engineer, specifically for the frontend development at the leading e-commerce 
                                platform in Southeast Asia and Taiwan, Shopee. I have been in frontend development field since 2021 when I got 
                                my first internship. For me this job is align with my degree and art passion.
                                Besides that, I also love cooking and designing. 
                            </p>
                        </div>
                    </Profile>
                </Slide>

                <Skills>
                    <Slide bottom>
                        <SubTitle>
                            Technical Skills
                        </SubTitle>
                        <CardsContainer>
                            {this.state.skills.map(function (skill, i) {
                                return (
                                    <Card key={'skill-' + i}>
                                        <div className="icon">
                                            <FontAwesomeIcon icon={skill.icon} size={"3x"}/>
                                        </div>
                                        <span className="title">{skill.title}</span>
                                        <div className="row">
                                            {skill.items.map((item) => {
                                                return <li>{item}</li>
                                            })}
                                        </div>
                                    </Card>
                                )
                            })}
                        </CardsContainer>
                    </Slide>
                </Skills>    
                
                <Slide bottom>
                    <Experiences>
                        <SubTitle>Experiences</SubTitle>
                        {this.state.experiences.map(function (experience, i) {
                            return (
                                <Row key={'experience-' + i}>
                                    <Column left>
                                        <Bullet/>
                                        { experience.last ? null : experience.title.length > 40 ? <Divider long/> : <Divider /> }
                                    </Column>
                                    <Column right>
                                        <h3>{experience.title}</h3>
                                        <p>{experience.desc}</p>
                                    </Column>
                                </Row>
                            )
                        })}
                    </Experiences>
                </Slide>
            </Container>
            <Footer/>
            </div>
        )
    }
}

export default About;