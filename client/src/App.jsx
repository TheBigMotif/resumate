import React, { useState } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./components/home.jsx";
import Trustedby from "./components/Trustedby.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import PersonalData from "./components/PersonalData.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./components/Prueba.jsx";
import Resume from "./components/Resume.jsx";
import Rough from "./components/Rough.jsx";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/graphql",
});

function App() {
  const [result, setResult] = useState({});

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Navbar />
          {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home1" element={<Rough setResult={setResult} />} />
            <Route path="/resume" element={<Resume result={result} />} />
            <Route path="/personaldata" element={<PersonalData />} />
          </Routes>
          <Trustedby />
          <Prueba />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
