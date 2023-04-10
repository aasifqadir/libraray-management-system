import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
import Search from '@mui/icons-material/SearchOutlined';
import PermIdentity from '@mui/icons-material/PermIdentityOutlined';
const UserNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/user"><img src="/Images/pngwing.com.png" alt="" /></Link>
            </div>
            <div className="navbar-links">
                <nav>
                    <ul>
                        <li> <Link to='/user/'>DashBoard</Link></li>
                        <li> <Link to='/user/book-list'>Book List</Link></li>
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

export default UserNavbar;