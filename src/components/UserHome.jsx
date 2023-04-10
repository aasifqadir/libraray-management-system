import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import UserNavbar from "./UserNavbar";
import BookList from "./BookList";
import ReadBook from "./ReadBook";
const UserHome = () => {
    return (
        <div className="userhome">
        <UserNavbar />
        <div className="routes">
            <Routes>
                <Route path='/' element={<AdminDashboard />} />
                <Route path="/book-list" element={<BookList />} />
                <Route path="/book-list/:id" element={<ReadBook />} />
            </Routes>
        </div>
    </div>
    );
}

export default UserHome;