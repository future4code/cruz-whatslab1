import styled from "styled-components"
import { Component } from "react"

const Mensagem = styled.div`
    padding: 10px;
    position: relative;
    bottom: 0;
    margin: 0 10px 10px 10px;
    width: fit-content;
    max-width: 400px;
    cursor: pointer;
    background-color: #fff;
    -webkit-border-radius: 6px; 
    -moz-border-radius: 6px; 
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px 0px;
    font-size: 0.9em;
    word-wrap: break-word;
    &:first-of-type {
        margin-top: auto;
    }
    &.right {
        background-color: rgb(221, 247, 200);
        align-self: flex-end;
    }
    & span {
        font-weight: bold;
        color: #1AD1E6;
    }
`
const MensagemContent = styled.p`
    margin: 0;
    margin-top: 6px;
    &.rightP {
        margin: 0;
    }
`

class SecaoListarMensagens extends Component {

    render() {
        if (this.props.nomeUsuario === "eu") {
            return (
                <Mensagem onDoubleClick={() => this.props.deletar(this.props.id)} className="right">
                    <MensagemContent className="rightP">{this.props.mensagemUsuario}</MensagemContent>
                </Mensagem>)
        } else {
            return (
                <Mensagem onDoubleClick={() => this.props.deletar(this.props.id)}>
                    <span>{this.props.nomeUsuario}:</span><MensagemContent>{this.props.mensagemUsuario}</MensagemContent>
                </Mensagem>)
        }
    }
}

export default SecaoListarMensagens;
