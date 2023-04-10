import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/AdminLogin.css'
import HomeNavbar from "./HomeNavbar";


const UserLogin = () => {
    let navigate = useNavigate()
    let email = useRef(null)
    let password = useRef(null)

    let submit = (e) => {
        e.preventDefault()
        navigate('/user')
    }
    return (
        <div>
            <HomeNavbar />
            <form action="" onSubmit={submit}>
                <div className="form">
                    <h1>User Login</h1>
                    <input ref={email} type="email" placeholder="UserName / Email" required />
                    <input ref={password} type="text" placeholder="Passowrd" required />
                    <input id="btn" type="submit" value="LOGIN" />
                    <Link to="/admin-login"><h2>Not a User?</h2></Link>
                </div>
            </form>
        </div>
    );
}

export default UserLogin;