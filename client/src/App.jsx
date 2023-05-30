import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Home from "./components/home.jsx";
import Trustedby from "./components/Trustedby.jsx";
import Navbar from "./components/Navbar.jsx";
import Signup from "./components/Signup.jsx";
import PersonalData from "./components/PersonalData.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./components/Prueba.jsx";
import Resume from "./components/Resume.jsx";
import Rough from "./components/Rough.jsx";
import Work from "./components/Work.jsx";

const link = createHttpLink({
  uri: " http://localhost:3001/graphql",
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
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
            <Route path="/work" element={<Work />} />
          </Routes>
          <Trustedby />
          <Prueba />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
