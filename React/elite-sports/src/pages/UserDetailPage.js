import React, {useContext} from 'react';
import { SiteContext } from '../context/SiteContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 2rem auto;
    padding: 3rem;
    border: 1px solid black;
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
    const { selectedUser } = useContext(SiteContext);

  return (
    <Container>
        <Picture src={selectedUser.picture.large} alt={selectedUser.name.first} />
        <Name>{`${selectedUser.name.first} ${selectedUser.name.last} (${selectedUser.dob.age})`}</Name>
        <Location>{`${selectedUser.location.city}, ${selectedUser.location.country}`}</Location>
    </Container>
  )
}

export default UserDetailPage