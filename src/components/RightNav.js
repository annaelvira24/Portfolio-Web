import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

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
    
  a{
    text-decoration: none;
    color: #3F4648;
      
    &:hover{
      transition: 0.3s;
      color: #0085AF;
    }
  }

  li {
    padding-left: 30px;
    cursor: pointer;
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
      padding-top: 30px;

        &:hover{
            color: white;
            opacity: 0.8;
        }
    }

    a{
      color: #fff;
        
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
            <li> <Link to ='/'>Home</Link></li>
            <li> <Link to ='/about'>About Me</Link></li>
            <li> <Link to ='/portfolio'>Portfolio</Link></li>
            <li> <Link to ='/social'>Social Media</Link></li>
        </Ul>
        <Overlay open={open}/>
    </div>

  )
}

export default RightNav