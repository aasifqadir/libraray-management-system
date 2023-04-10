import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css'
import HomeNavbar from "./HomeNavbar";

const AdminLogin = () => {
    let navigate = useNavigate()
    let email = useRef(null)
    let password = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        if (email.current.value === "admin@gmail.com" && password.current.value === 12345) {
            navigate('/admin')

        } else {
            alert("invalid Credential")
        }
    }
    return (
        <div>
            <HomeNavbar />
            <form action="" onSubmit={submit}>
                <div className="form">
                    <h1>Admin Login</h1>
                    <input ref={email} type="email" placeholder="Email" required />
                    <input ref={password} type="text" placeholder="Passowrd" required />
                    <input id="btn" type="submit" value="LOGIN" />
                    <Link to="/user-login"><h2>Not an Admin?</h2></Link>
                </div>
            </form>
        </div>

    );
}

export default AdminLogin;