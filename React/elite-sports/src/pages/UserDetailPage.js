import React, {useContext} from 'react';
import { SiteContext } from '../context/SiteContext';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    background-color: ${props => props.dark ? 'black' : 'white' };
    padding: 3rem;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 300px;
    margin: 2rem auto;
    padding: 3rem;
    border: 1px solid black;
    border-radius: 4px;
    background-color: whitesmoke ;
`

const Picture = styled.img`
    width: 80%;
    height: auto;
    margin: 1rem auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
`
const Name = styled.h3`
    font-size: 2rem;
    text-align: center;
`

const Location = styled.p`
    text-align: center;
`

const UserDetailPage = () => {
    const { selectedUser, darkMode } = useContext(SiteContext);

  return (

    <Container dark = {darkMode}>
        <Card>
            <Picture src={selectedUser.picture.large} alt={selectedUser.name.first} />
            <Name>{`${selectedUser.name.first} ${selectedUser.name.last} (${selectedUser.dob.age})`}</Name>
            <Location>{`${selectedUser.location.city}, ${selectedUser.location.country}`}</Location>
        </Card>       
    </Container>

  )
}

export default UserDetailPage