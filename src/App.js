import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Reservations from "./pages/Reservations/Reservations";
import Chat from "./pages/Chat/Chat";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    if (token) {
      const decoded = jwtDecode(token);
      setUserData(decoded);
    }
  }, []);

  return (
    <>
      <Header
        userData={userData}
        setUserData={setUserData}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home userData={userData} />} exact={true} />
        <Route path="/home" element={<Home userData={userData} />} />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/profile" replace /> : <Signup />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" replace />
            ) : (
              <Login
                userData={userData}
                setUserData={setUserData}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            )
          }
        />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile userData={userData} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/reservations"
          element={
            isLoggedIn ? <Reservations /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/chat"
          element={isLoggedIn ? <Chat /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
