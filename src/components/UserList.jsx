import { useEffect, useState } from "react";
import '../styles/BookList.css'

const UserList = () => {
    let [user, setUser] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/users')
            let data = await response.json()
            setUser(data)
        }
        fetchData()
    }, [user])

    let deleteUser = (id) => {
        fetch(`http://localhost:4000/users/${id}`, { method: 'DELETE' });
        // alert(`${title} is deleted succesfully`)
    }

    return (
        <div className="book-list">
            <h1>Total Users = {user.length}</h1>
            {user.map((data) => {
                return (
                    <div className="book-details">
                        <h3>{data.name}</h3>
                        <h5>Name : {data.email}</h5>
                        <h5>Age : {data.age}</h5>
                        <div className="book-details-btn">
                            <button onClick={() => deleteUser(data.id)}> Delete</button >
                        </div>
                    </div >
                )
            })}

        </div >
    );
}

export default UserList;