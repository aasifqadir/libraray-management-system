import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from "./components/LandingPage";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path='/admin/*' element={<AdminHome />} />
          <Route path='/user/*' element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;