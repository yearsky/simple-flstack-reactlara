import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/home";
import Dashboard from "../components/dashboard";
import AuthUser from "../components/AuthUser";
function Auth() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token !== undefined) {
      logout();
    }
  };
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-1">
          <button className="btn btn-primary" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default Auth;
