import React from "react";
import "./App.css";
import styled from "styled-components";
import SecaoEnviarMensagens from "./components/SecaoEnviarMensagens"

const DivContainer = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 90vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  overflow: scroll;
`;

function App() {
  return (
    <DivContainer>
      <SecaoEnviarMensagens />
    </DivContainer>
  );
}
export default App;