import React from "react";
import "./App.css";
import styled from "styled-components";
import SecaoEnviarMensagens from "./components/SecaoEnviarMensagens"

const DivContainer = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 90vh;
  border: 1px solid black;
  position: relative;
  overflow-y: auto;
`;

function App() {
  
  return (
    <DivContainer>
      <SecaoEnviarMensagens />
    </DivContainer>
  );
}
export default App;