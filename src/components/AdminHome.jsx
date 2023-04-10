import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNavbar from "./AdminNavbar";
import AddBook from "./AddBook";
import AddUser from "./AddUser";
import BookList from "./BookList";
import UserList from "./UserList";
import ReadBook from "./ReadBook";

const AdminHome = () => {
    return (
        <div className="adminhome">
            <AdminNavbar />
            <div className="routes">
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/add-user" element={<AddUser />} />
                    <Route path="/book-list" element={<BookList />} />
                    <Route path="/user-list" element={<UserList />} />
                    <Route path="/book-list/:id" element={<ReadBook />} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminHome;