import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";
import Body from './components/Body/Body';

function App() {
  return (
    <Container className="App">
      {/* NavBar */}
      <NavBar />

      {/* Body */}
      <Body />
    </Container>
  );
}

export default App;

const Container = styled.div`
  &&&{
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
