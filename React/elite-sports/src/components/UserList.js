import React, {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import fetchUsers from '../api';
import styled from 'styled-components';
import { SiteContext } from '../context/SiteContext';


const Container = styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    background-color: ${props => props.dark ? 'black' : 'white' } 
`
const TableHeader = styled.thead `
    background-color: grey;
    color: white;
    margin:0 ;
`

const Table = styled.table`
margin: 2rem auto;

`

const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 3fr;
    border: 1px solid;
    border-color: ${props => props.dark ? 'white' : 'black' };
    transition: all 0.3s;
    &:hover {
        background-color: lightgray;
    }
`

const TableHeaderItem = styled.th`
    margin: 0;
`
const TableData = styled.td`
    text-align: center;
    color: ${props => props.dark ? 'white' : 'black' } 
    
`

const ProfilePicture = styled.img`
    border-radius: 2px;
    max-width:60% ;
`

const UserList = () => {
   
    const {currentUsers, setCurrentUsers, setSelectedUser, darkMode} = useContext(SiteContext);
    let navigate = useNavigate();
    

    const load = async () => {
        const users = await fetchUsers();
        console.log('CURRENT USERS');
        setCurrentUsers(users);
        console.log(currentUsers);
      }

      useEffect(() => {
        load();
      }, []);

      const handleUserSelect = (user) => {
          setSelectedUser(user);
          navigate(`/users/${user.login.uuid}`);          
      }

  return (
 
    
    <Container dark = {darkMode}>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderItem>Picture</TableHeaderItem>
                    <TableHeaderItem>Name</TableHeaderItem>
                    <TableHeaderItem>Age</TableHeaderItem>
                    <TableHeaderItem>Country</TableHeaderItem>
                    <TableHeaderItem>email</TableHeaderItem> 
                </TableRow>
            </TableHeader>
            <tbody>
            {
                    currentUsers.map(user => {
                        console.log(user);
                        return(
                        <TableRow dark = {darkMode} onClick = { () => handleUserSelect(user)} key={user.login.uuid}>
                            <TableData dark = {darkMode}><ProfilePicture src={user.picture.thumbnail} alt='user profile'/></TableData>
                            <TableData dark = {darkMode}>{`${user.name.first} ${user.name.last}`}</TableData>
                            <TableData dark = {darkMode}>{user.dob.age}</TableData>
                            <TableData dark = {darkMode}>{user.location.country}</TableData>
                            <TableData dark = {darkMode}>{user.email}</TableData>
                        </TableRow>
                        )
                    })
                } 
            </tbody>
        </Table>
    </Container>

  

    
  )
}

export default UserList