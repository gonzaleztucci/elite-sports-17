import React, {useEffect, useContext, useState} from 'react'
import fetchUsers from '../api';
import styled from 'styled-components';
import { SiteContext } from '../context/SiteContext';
import UserTile from './UserTile';


const Container = styled.div`
    margin: 1rem auto;
    border: 1px solid black;
    width: 95%;

`
const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 2fr 0.5fr 1fr 2fr;
    background-color: gray;
`

const HeaderText = styled.p`
    color: white;
    font-weight: bold;
`

const UserList = () => {
    const {currentUsers, setCurrentUsers} = useContext(SiteContext);
    
    

    const load = async () => {
        const users = await fetchUsers();
        console.log('CURRENT USERS');
        setCurrentUsers(users);
        console.log(currentUsers);
      }

      useEffect(() => {
        load();
      }, []);

  return (
      <Container>
        <TableHeader>
            <HeaderText>Picture</HeaderText>
            <HeaderText>Name</HeaderText>
            <HeaderText>Age</HeaderText>
            <HeaderText>Country</HeaderText>
            <HeaderText>email</HeaderText>
        </TableHeader>
        {
            currentUsers.map(user => <UserTile 
                                        key={user.id}
                                        picture = {user.picture.thumbnail}
                                        name = {user.name}
                                        age = {user.dob.age}
                                        country = {user.location.country}
                                        email = {user.email}
                                         />)
        }
      </Container>
    
  )
}

export default UserList