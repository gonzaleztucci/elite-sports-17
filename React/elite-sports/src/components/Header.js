import React, { useContext } from 'react';
import styled from 'styled-components';
import { SiteContext } from '../context/SiteContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
    margin:0;
    background-color: ${props => props.dark ? 'black' : 'white' };

`
const Title = styled.h1`
    color: ${props => props.dark ? 'white' : 'black' };
`
const Button = styled.button`
  background-color: grey; 
  border: none;
  border-radius: 3px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`


const Header = () => {

    const { darkMode, setDarkMode } = useContext(SiteContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      }


  return (
    <Container dark = {darkMode}>
        <Title dark = {darkMode}>Some random users</Title>
        <Button className="toggleButton" onClick={toggleDarkMode}>
            {darkMode ? <FontAwesomeIcon icon={faLightbulb} /> : <FontAwesomeIcon icon={faMoon} />}
        </Button>
    
   </Container>
  )
}

export default Header