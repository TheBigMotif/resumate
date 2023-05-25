import Home from "./components/home.jsx";
import Trustedby from "./components/Trustedby.jsx";
import Navbar from "./components/Navbar.jsx"
import Singup from "./components/singnup1"
import Personal from "./components/Formularios/personal.jsx"
import DeveloperTools from "./components/Formularios/multipleq.jsx";



function App() {
  return (
    <>
      <Navbar/>
      <Home />
      <Trustedby />
      <Singup />
      <Personal />
      <DeveloperTools />
    </>
  );
}

export default App;
