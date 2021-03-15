import { Component } from "react";
import styled from "styled-components";
import SecaoListarMensagens from "./SecaoListarMensagens";

// Componentes de estilização **********************************
const Respostas = styled.div`
    height: 96%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 39px;
`

const DivContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  bottom: 0;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;
const InputUsuario = styled.input`
  border: 1px solid #ddd;
  height: 14px;
  width: 20%;
  padding: 10px;
`;

const InputMensagem = styled.input`
  border: 1px solid #ddd;
  height: 14px;
  width: 50%;
  padding: 10px;
`;

const ButtonEnviar = styled.button`
  border: 1px solid #ddd;
  height: 36px;
  width: 20%;
  padding: 10px;
`;
// *************************************************************

class SecaoEnviarMensagens extends Component {
  state = {
    mensagens: [],
    id: 0,
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
    const div = document.getElementById('main-scroll');
    div.scrollTop = div.scrollHeight;

    if (this.state.mensagemUsuario === "") {
      alert("Digite uma mensagem!")
      return false;
    }
    if (this.state.nomeUsuario === "") {
      alert("Digite seu usuário!")
      return false;
    }
    const novaMensagem = {
      id: this.state.mensagens.length + 1,
      nomeUsuario: this.state.nomeUsuario.toLowerCase(),
      mensagemUsuario: this.state.mensagemUsuario,
    };

    this.setState({
      mensagens: [...this.state.mensagens, novaMensagem],
      mensagemUsuario: "",
    });
  };

  enviarMensagemKey = (event) => {
    if (event.keyCode === 13) {
      this.enviarMensagem();
    }
  }

  deleteMensagem = (id) => {
    const novaLista = this.state.mensagens.filter((item) => {
      return item.id !== id;
    })

    if (window.confirm('Deseja realmente deletar está mensagem?')) {
      this.setState({
        mensagens: novaLista
      });
    }
  }

  render() {
    const listaDeMensagens = this.state.mensagens.map((msg, index) => {
      return (
        <SecaoListarMensagens
          id={msg.id}
          key={index}
          nomeUsuario={msg.nomeUsuario}
          mensagemUsuario={msg.mensagemUsuario}
          deletar={this.deleteMensagem}
        />
      );
    });

    return (
      <div>
        <Respostas id="main-scroll">{listaDeMensagens}</Respostas>
        <DivContainer>
          <InputUsuario
            placeholder="Usuário"
            onChange={this.handleUsuario}
            value={this.state.nomeUsuario}
          />
          <InputMensagem
            onKeyDown={this.enviarMensagemKey}
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
