import React, { useState } from 'react';
import styled from 'styled-components';
import { Contents } from './PortfolioContent';
import { ComingSoon } from './ComingSoon';

const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  height: 40px
  width: 148px;
  border-radius: 20px;

  margin-right: 20px;
  cursor: pointer;
  color: white;
  background: #0085AF;
  border: 0;
  outline: 0;
  transition: 0.3s linear;

  &:hover{
    opacity: 0.8;
  }
  
  ${({ active }) => active &&
    `
    background: #3F4648;
    font-weight: 500;
  `}

  @media only screen and (max-width: 768px){
    padding: 10px 20px;
    margin-right: 10px
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ContentGroup = styled.div`
  overflow: hidden !important;
  display: flex;
  height: auto;

  @media only screen and (max-width: 768px){
    margin-left: -15px;
    margin-right: -10px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Content = styled.div`
    width: 0px;
    height: 0px;
    transition: opacity 0.5s ease-out;
    opacity: 0;
    overflow: hidden;

    

    ${({ active }) => active &&
    `
      opacity: 1;
      // left: 0px;
      // opacity: 100%;
      z-index: 10px;
      // display: block;
      width: 100%;
      height: 100%;
      font-weight: 500;
    `}
`;

const types = [
  {
    type: "Code",
    content: <Contents now={"code"} />
  },
  {
    type: 'UI/UX',
    content: <Contents now={"uiux"} />
   },
   {
    type: 'Design',
    content: <Contents now={"design"} />
  }];

export function TabGroup() {
  const [active, setActive] = useState(types[0].type);
  return (
    <>
      <ButtonGroup>
        {types.map(item => (
          <Tab
            key={item.type}
            active={active === item.type}
            onClick={() => setActive(item.type)}
          >
            {item.type}
          </Tab>
        ))}
      </ButtonGroup>

      <ContentGroup>
        {types.map(item => (
          <Content
            key={item.type}
            content={item.content}
            active={active === item.type}
            onClick={() => setActive(item.type)}
          >
            {item.content}
          </Content>
        ))}
      </ContentGroup>
    </>
  );
}