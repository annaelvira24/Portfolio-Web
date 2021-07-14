import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
    background: black;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top:0;
    z-index: -10;
    transition: 0.4s;

    opacity: ${({ open }) => open ? '0.5' : '0'};
    visibility: ${({ open }) => open ? 'visible' : 'none'};


`;

const Ul = styled.ul`   
    font-family: "Raleway";
    font-weight: 700;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 120px;
    

  li {
    padding-left: 30px;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        color: #0085AF;
    }
  }

  @media (max-width: 1060px) {
    padding-right: 50px;
  }
  

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0085AF;
    position: fixed;
    z-index: 20;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: -20px;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 5px;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
      padding-top: 30px;

        &:hover{
            color: white;
            opacity: 0.8;
        }
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div>
        <Ul open={open}>
            <li onClick={() => window.location.href='/Portfolio-Web'}>Home</li>
            <li onClick={() => window.location.href='about'}>About Me</li>
            <li onClick={() => window.location.href='portfolio'}>Portfolio</li>
            <li onClick={() => window.location.href='social'}>Social Media</li>
        </Ul>
        <Overlay open={open}/>
    </div>

  )
}

export default RightNav