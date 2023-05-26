import Home from "./components/home.jsx";
import Trustedby from "./components/Trustedby.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import PersonalData from "./components/PersonalData.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/personaldata" element={<PersonalData />} />
        </Routes>
        <Trustedby />
      </BrowserRouter>
    </>
  );
}

export default App;
