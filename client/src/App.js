import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Onboarding from "./pages/Onboarding";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={Home()} />
          <Route path="/home" exact element={Home()} />
          <Route path="/register" element={Register()} />
          <Route path="/onboarding" element={Onboarding()} />{" "}
          <Route path="/login" element={Login()} />
          <Route path="/profile" element={Profile()} />{" "}
          <Route path="/reservations" element={Reservations()} />{" "}
        </Routes>
      </div>
    </>
  );
}

export default App;
