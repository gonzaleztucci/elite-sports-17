import React from 'react'
import styled from 'styled-components';

const Tile = styled.div`
    display: grid;
    border: 1px solid black;
    grid-template-columns: 0.5fr 3fr 0.5fr 1fr 1fr;
    grid-template-areas: "pic" "name" "age" "country" "email";
    height: 3rem;
`

const Text = styled.p`
    font-size: 1rem;
`
const Pic = styled.img` 

  border-radius: 3px;
  margin: auto ;
  max-width: 30%;
  height: auto ;

`


const UserTile = (props) => {
  return (
      <Tile>
        <Pic src={props.picture} />
        <Text>{`${props.name.first} ${props.name.last}`}</Text>
        <Text>{props.age}</Text>
        <Text>{props.country}</Text>
        <Text>{props.email}</Text>
      </Tile>
 
  )
}

export default UserTile