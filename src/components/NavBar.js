import React from 'react';
import styled from 'styled-components';
import { Burger } from './Burger';
import logo from './../assets/img/logo-small.svg';
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 60px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  transition: 0.3s;

  background: ${({ scrolled }) => scrolled ? '#0085AF' : 'white'};
  z-index: 100;

  img {
    cursor: pointer;
    padding-left: 110px;
    margin-top: 4px;
    width: 40px;
    transition: 0.3s;

    filter: ${({ scrolled }) => scrolled ? 'invert(100%) brightness(100%) contrast(200%) opacity(1)' : 'none'};
  }


  @media (max-width: 1060px) {
    img {
      padding-left: 50px;
    }
  }

  @media (max-width: 768px) {
    img {
      padding-left: 25px;
    }
  }
`

export function Navbar(props){
  return (
    <Nav scrolled={props.scrolled}>
      <Link to="/">
        <img className={props.scrolled ? "filter" : ""} src={logo}/>
      </Link>
      <Burger active = {props.active} scrolled={props.scrolled}/>
    </Nav>
  )
}

export default Navbar