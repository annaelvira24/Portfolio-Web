import React from 'react';
import { ComingSoon } from './../components/ComingSoon';
import styled from 'styled-components';
import { TabGroup } from "./../components/Tabs"; 
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

    h1{
        margin-bottom: -30px;
    }
`;

class Portfolio extends React.Component{
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
                    active = {"portfolio"}
                />
                <Container>
                    <Slide bottom>
                        <Title>Portfolio</Title>
                        <SubTitle>Meet my projects</SubTitle>
                        <TabGroup/>
                    </Slide>
                </Container>
                <Footer/>
                
            </div>
        )
    }
}

export default Portfolio;