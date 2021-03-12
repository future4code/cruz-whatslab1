import { Component } from "react";
import styled from "styled-components";
import SecaoListarMensagens from "./SecaoListarMensagens";

// Componentes de estilização **********************************
const Respostas = styled.div `
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    flex-direction:column;
    overflow-y: auto;
`

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  bottom: 0;
`;
const InputUsuario = styled.input`
  width: 20%;
  padding: 10px;
`;

const InputMensagem = styled.input`
  width: 60%;
  padding: 10px;
`;

const ButtonEnviar = styled.button`
  width: 20%;
  padding: 10px;
`;
// *************************************************************

class SecaoEnviarMensagens extends Component {
  state = {
    mensagens: [],
    nomeUsuario: "",
    mensagemUsuario: "",
  };

  handleUsuario = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };
  handleMensagem = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.nomeUsuario,
      mensagemUsuario: this.state.mensagemUsuario,
    };

    this.setState({
      mensagens: [...this.state.mensagens, novaMensagem],
    });
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((msg, index) => {
      return (
        <SecaoListarMensagens
          key={index}
          nomeUsuario={msg.nomeUsuario}
          mensagemUsuario={msg.mensagemUsuario}
        />
      );
    });

    return (
      <div>
        <Respostas>{listaDeMensagens}</Respostas>
        <DivContainer>
          <InputUsuario
            placeholder="Usuário"
            onChange={this.handleUsuario}
            value={this.state.nomeUsuario}
          />
          <InputMensagem
            placeholder="Mensagem"
            onChange={this.handleMensagem}
            value={this.state.mensagemUsuario}
          />
          <ButtonEnviar onClick={this.enviarMensagem}>Enviar</ButtonEnviar>
        </DivContainer>
      </div>
    );
  }
}

export default SecaoEnviarMensagens;
