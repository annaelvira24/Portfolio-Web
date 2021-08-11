import React from 'react'
import styled from 'styled-components';
import Modal from 'react-modal';

const ModalLayout = styled(Modal)`
    >.container{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        transition: 0.3s ease-in;
    }

    h3{
        font-size: 20px;
        margin-left: 20px;
    }

    p{
        text-align: left;
        font-size: 16px:
        color: #626B79;
    }

    @media only screen and (max-width: 800px){
        >.container{
            width: 98%
        }
    }
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ImageContainer = styled.div`
    position: relative;

    img{
        width: 90%;
    }

    @media only screen and (max-width: 800px){
        img{
            width: 100%;
        }
    }
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, -90%);

    display: flex;
    justify-content: flex-end;
    margin-top: -65px;

    @media only screen and (max-width: 768px){
        margin-top: -50px;
    }
`;

const Button = styled.button`
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: 1px solid #0085AF;
  font-weight: 600;

  height: auto;
  font-size: 14px;

  width: 150px;
  transition: 0.3s;

  background-color: ${props => props.secondary ? 'white' : '#0085AF'};
  margin-left: ${props => props.secondary ? '20px' : '0px'};

  color: ${props => props.secondary ? '#3F4648' : 'white'};
  padding: 10px 20px 10px 20px;

  &:hover{
    filter: brightness(85%);
  }
`;

export class ModalPopUp extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.open) {
            return null;
        }
        else{
        return(
            <ModalLayout
                isOpen = {true}
                ariaHideApp={false}
                style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(35, 41, 51, 0.8)',
                    zIndex: 1000
                    },
                content: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: 'auto',
                    background: 'none',
                    outline: 'none',
                    textAlign: 'center',
                    transition: '0.3s ease-in'
                }
                }}>
                    <div className="container">
                        <Row>
                            <ImageContainer>
                                <img src={this.props.image}/>
                                <ButtonContainer>
                                    <Button 
                                        style = {{display: this.props.button ? "block" : "none"}}
                                        onClick = { () => (window.location.href = this.props.link)}>
                                            {this.props.buttonText}
                                    </Button>
                                    <Button secondary onClick = {this.props.toggleModal}>Close</Button>
                                </ButtonContainer>
                            </ImageContainer>
                        </Row>
                    </div>
                </ModalLayout>
            )
        }
    }
}