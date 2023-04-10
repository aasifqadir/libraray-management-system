import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
import Search from '@mui/icons-material/SearchOutlined';
import PermIdentity from '@mui/icons-material/PermIdentityOutlined';
const HomeNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/"><img src="/Images/pngwing.com.png" alt="" /></Link>
            </div>
            <div className="navbar-links">
                <nav>
                    <ul>
                        <li><Link to={'/'}>DashBoard</Link></li>
                        <li><Link to="/admin-login">Admin Login</Link></li>
                        <li><Link to="/user-login">User Login</Link></li>
                        {/* <li> <Link to={'/admin/AddBook'} >Add Books</Link></li>
                    <li> <Link to={'/admin/AddUser'}>Add User</Link></li>
                    <li> <Link to={'/admin/Booklist'}>Book List</Link></li>
                    <li> <Link to={'/admin/Userlist'} >User List</Link></li> */}
                    </ul>
                </nav>
            </div>
            <div className='navbar-icons'>
                <Search />
                <PermIdentity />
            </div>
        </div>
    );
}

export default HomeNavbar;