import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
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
import Education from "./components/Education.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import Hardskills from "./components/Hardskills.jsx";
import Interests from "./components/Interests.jsx";
import Comingsoon from "./components/comingsoon.jsx";
const link = createHttpLink({
  uri: " http://localhost:3001/graphql",
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link),
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
            <Route path="/education" element={<Education />} />
            <Route path="/softskills" element={<SoftSkills />} />
            <Route path="/hardskills" element={<Hardskills />} />
            <Route path="/interests" element={<Interests />} />
          </Routes>
          <Trustedby />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
