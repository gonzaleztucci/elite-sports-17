import React from 'react'
import styled from 'styled-components';
import UserTile from './UserTile';


const Container = styled.div`
    margin: 1rem auto;
    border: 1px solid black;
    width: 95%;

`
const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 3fr 0.5fr 1fr 1fr;
    background-color: gray;
`

const HeaderText = styled.p`
    color: white;
    font-weight: bold;
    border: 2px solid red;
`

const UserList = () => {
  return (
      <Container>
        <TableHeader>
            <HeaderText>Picture</HeaderText>
            <HeaderText>Name</HeaderText>
            <HeaderText>Age</HeaderText>
            <HeaderText>Country</HeaderText>
            <HeaderText>email</HeaderText>
        </TableHeader>
        <UserTile />
        <UserTile />
        <UserTile />
        <UserTile />
      </Container>
    
  )
}

export default UserList