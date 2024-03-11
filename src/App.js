import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import Profile from "./pages/Profile/Profile";
import Reservations from "./pages/Reservations/Reservations";
import Chat from "./pages/Chat/Chat";
// import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      {/* <GoogleOAuthProvider clientId="680554552772-nta47dvlgkcqoba9p78ce0ng16faaj64.apps.googleusercontent.com"> */}
      <Header />
      <Routes>
        <Route path="/" exact element={Home()} />
        <Route path="/home" exact element={Home()} />
        <Route path="/signup" element={Signup()} />
        <Route path="/login" element={Login()} />
        <Route path="/profile" element={Profile()} />
        <Route path="/reservations" element={Reservations()} />
        <Route path="/chat" element={Chat()} />
      </Routes>
      {/* </GoogleOAuthProvider> */}
    </>
  );
}

export default App;
