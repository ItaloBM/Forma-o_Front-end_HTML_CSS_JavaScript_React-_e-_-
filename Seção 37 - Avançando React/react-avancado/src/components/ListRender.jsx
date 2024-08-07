import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Item 1", "Item 2", "Item 3"]);

    const [users, setUsers] = useState([
        { id: 1, name: "João", age: 31 },
        { id: 2, name: "Maria", age: 20 },
        { id: 3, name: "Antônio", age: 19 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
        {/*Render sem key*/}
        <ul style={{listStyle: "none"}}>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>  

        {/*Render com key*/}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>   
            ))}
        </ul>  

        {/*Previous State*/}
        <button onClick={deleteRandom}>Delete random user</button>

    </div>
  )
}

export default ListRender
