import { Link } from "react-router-dom";
const LandingPage = () => {
    return (
        <div>
            <h1>Login as .... ?</h1>
            <Link to="/admin-login">Admin Login</Link>
            <Link to="/user-login">User Login</Link>
        </div>
    );
}

export default LandingPage;