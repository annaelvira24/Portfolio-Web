import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Overlay = styled.div`
    background: black;
    opacity: 0.5;
    height: 100%;
    position: fixed;
    right: 0;
    top:0;
    transition: 0.4s;

    opacity: ${({ open }) => open ? '0.5' : '0'};
    width: ${({ open }) => open ? '100%' : '0'};

    @media (min-width:768px){
      display: none;
    }
`;

const Ul = styled.ul`   
    font-family: "Raleway";
    font-weight: 700;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    padding-right: 120px;
    
  // a{
  //   text-decoration: none;
  //   color: ${({ scrolled, active }) => scrolled ? 'white' : active ? '#0085AF' : '#3F4648'};
      
  //   &:hover{
  //     transition: 0.3s;
  //     color: ${({ scrolled }) => scrolled ? 'white' : '#0085AF'};
  //     opacity: ${({ scrolled }) => scrolled ? '0.8' : '1'};
  //   }
  // }

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
  }
`;

const NavBarChild = styled(Link)`
  text-decoration: none;
  color: ${({ scrolled, active }) => scrolled ? 'white' : active ? '#0085AF' : '#3F4648'};
    
  &:hover{
    transition: 0.3s;
    color: ${({ scrolled }) => scrolled ? 'white' : '#0085AF'};
    opacity: ${({ scrolled }) => scrolled ? '0.8' : '1'};
  }

  @media (max-width: 768px) {
    color: #fff;
        
    &:hover{
      color: white;
      opacity: 0.8;
    }
  }
`

const navMenu = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/about',
    text: 'About Me',
    key: 'about'
  },
  {
    path: '/portfolio',
    text: 'Portfolio',
    key: 'portfolio'
  },
  {
    path: '/other',
    text: 'Other Links',
    key: 'other'
  },
]

const RightNav = ({ open, scrolled, active }) => {
  return (
    <div>
        <Ul open={open} scrolled={scrolled}>
          { navMenu.map(function(nav) {
            return (
              <li>
                <NavBarChild
                  key={nav.key}
                  to ={nav.path}
                  scrolled={scrolled}
                  active = {active === nav.key}
                >
                  {nav.text}
                </NavBarChild>
              </li>
            )
          })}
        </Ul>
        <Overlay open={open}/>
    </div>

  )
}

export default RightNav