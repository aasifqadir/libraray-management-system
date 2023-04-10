import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import HomeNavbar from "./HomeNavbar";
import '../styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div className="adminhome">
            <HomeNavbar />
            <div className="routes">
                <Routes>
                    <Route path='/' element={<AdminDashboard />} />
                </Routes>
            </div>
        </div>
    );
}
export default LandingPage;