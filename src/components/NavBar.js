import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
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

  z-index: 100;

  .logo {
    cursor: pointer;
    padding-left: 110px;
    margin-top: 10px;
    width: 40px;
  }

  @media (max-width: 1060px) {
    .logo {
      padding-left: 50px;
    }

  }
`

const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={logo}/>
      </Link>
      <Burger />
    </Nav>
  )
}

export default Navbar