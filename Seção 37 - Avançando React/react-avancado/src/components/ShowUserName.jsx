import React from 'react'

function ShowUserName(props) {
  return (
    <div>
        <h2> O nome do usuário é: {props.name}</h2>      
    </div>
  )
}

export default ShowUserName
