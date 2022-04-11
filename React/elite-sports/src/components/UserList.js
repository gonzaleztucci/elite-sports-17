import React, {useEffect, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
   
    const {currentUsers, setCurrentUsers, selectedUser, setSelectedUser} = useContext(SiteContext);
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
    //   <Container>
    //     <TableHeader>
    //         <HeaderText>Picture</HeaderText>
    //         <HeaderText>Name</HeaderText>
    //         <HeaderText>Age</HeaderText>
    //         <HeaderText>Country</HeaderText>
    //         <HeaderText>email</HeaderText>
    //     </TableHeader>
    //     {
    //         currentUsers.map(user => <UserTile 
    //                                     key={user.id}
    //                                     picture = {user.picture.thumbnail}
    //                                     name = {user.name}
    //                                     age = {user.dob.age}
    //                                     country = {user.location.country}
    //                                     email = {user.email}
    //                                     onClick = { () => handleUserSelect(user.id)}
    //                                      />)
    //     }
    //   </Container>

    <div className="container" style={{padding:"1.5rem"}} >
    <div className='list-group'>
        <table className="table table-hover table-light">
            <thead className='thead-dark'>
                <tr className="bg-primary">
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Country</th>
                    <th scope="col">email</th> 
                </tr>
            </thead>
            <tbody>
               {
                    currentUsers.map(user => {
                        console.log(user);
                        return(
                        <tr onClick = { () => handleUserSelect(user)} key={user.login.uuid}>
                            <td><img src={user.picture.thumbnail} alt='user profile'/></td>
                            <td>{`${user.name.first} ${user.name.last}`}</td>
                            <td>{user.dob.age}</td>
                            <td>{user.location.country}</td>
                            <td>{user.email}</td>
                        </tr>
                        )
                    })
                } 
            </tbody>
     </table>
    </div>

</div>

    
  )
}

export default UserList