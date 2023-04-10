import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
import Search from '@mui/icons-material/SearchOutlined';
import PermIdentity from '@mui/icons-material/PermIdentityOutlined';
const AdminNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-title">
                <Link to="/admin"><img src="/Images/pngwing.com.png" alt="" /></Link>
            </div>
            <div className="navbar-links">
                <nav>
                    <ul>
                        <li> <Link to='/admin/'>DashBoard</Link></li>
                        <li> <Link to='/admin/add-book'>Add Books</Link></li>
                        <li> <Link to='/admin/add-user'>Add User</Link></li>
                        <li> <Link to='/admin/book-list'>Book List</Link></li>
                        <li> <Link to='/admin/user-list'>User List</Link></li>
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

export default AdminNavbar;