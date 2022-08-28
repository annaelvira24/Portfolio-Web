import React from 'react';
import styled from 'styled-components';
import TabGroup from "../components/TabGroup"; 
import { Title, SubTitle } from '../components/Text';
import { Footer } from '../components/Footer';
import { ModalPopUp } from '../components/PopUp';
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
            scrolled: false,
            openModal: false,
            modal : {
                image: null,
                link: ''
            }
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {
        document.addEventListener("scroll", () => {
          const isScroll = window.scrollY < 80 ? false : true;
    
          this.setState({ scrolled: isScroll });
        });
    }

    toggleModal() {
        this.setState({openModal: !this.state.openModal })
    }

    handleSelect (content) {
        this.toggleModal()
        let newState = this.state.modal
        newState = {
            image: content.image,
            link: content.link
        }
        this.setState({ modal: newState})
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
                        <TabGroup selectContent = {this.handleSelect} />
                    </Slide>
                </Container>
                <ModalPopUp
                    open={this.state.openModal}
                    toggleModal={this.toggleModal}
                    image={this.state.modal.image}
                    link={this.state.modal.link}
                    button={this.state.modal.link ? true : false}
                />
                <Footer/>
            </div>
        )
    }
}

export default Portfolio;