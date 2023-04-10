import { useRef } from "react";
import '../styles/AdminLogin.css'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate()
    let name = useRef(null)
    let email = useRef(null)
    let age = useRef(null)
    let password = useRef(null)
    let confirmPassword = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            email: email.current.value,
            age: age.current.value,
            password: password.current.value,
            confirmPassword: confirmPassword.current.value,
        }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert('Book has been successfully added')
        navigate('/admin/user-list')
        // console.log(data);

    }
    return (
        <form action="" onSubmit={submit}>
            <div className="form form-login">
                <h1>Add User</h1>
                <input ref={name} type="text" placeholder="Name" required />
                <input ref={email} type="email" placeholder="Email" required />
                <input ref={age} type="number" placeholder="Age" required />
                <input ref={password} type="password" placeholder="Password" required />
                <input ref={confirmPassword} type="password" placeholder="Confirm Password" required />
                <input id="btn" type="submit" value="Add User" />
            </div>
        </form>

    );
}

export default AddUser;