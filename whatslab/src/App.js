import React from "react";
import "./App.css";
import styled from "styled-components";
import SecaoEnviarMensagens from "./components/SecaoEnviarMensagens"

const DivContainer = styled.div`
  margin: 20px auto;
  width: 600px;
  height: 90vh;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px 0px;
  border: 1px solid #b6b6b6;
  position: relative;
  overflow-y: auto;
  background-color: rgb(229, 221, 213);
`;

function App() {
  
  return (
    <DivContainer>
      <SecaoEnviarMensagens />
    </DivContainer>
  );
}
export default App;