import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Onboarding from "./pages/Onboarding";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={Home()} />
        <Route path="/home" exact element={Home()} />
        <Route path="/signup" element={Signup()} />
        <Route path="/onboarding" element={Onboarding()} />{" "}
        <Route path="/login" element={Login()} />
        <Route path="/profile" element={Profile()} />{" "}
        <Route path="/reservations" element={Reservations()} />{" "}
      </Routes>
    </>
  );
}

export default App;
