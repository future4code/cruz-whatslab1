import styled from "styled-components"
import { Component } from "react"

const Mensagem = styled.div`
    padding: 10px;
    position: relative;
    bottom: 0;
    margin: 0 10px 10px 10px;
    width: fit-content;
    max-width: 400px;
    border: 1px solid #b7b7b7;
    cursor: pointer;
    &:first-of-type {
        margin-top: auto;
    }
    &.right {
        align-self: flex-end;
    }
`
const MensagemContent = styled.span`
    
`

class SecaoListarMensagens extends Component {

    render() {
        if (this.props.nomeUsuario === "eu") {
            return (
                <Mensagem onDoubleClick={() => this.props.deletar(this.props.id)} className="right">
                    <MensagemContent>{this.props.mensagemUsuario}</MensagemContent>
                </Mensagem>)
        } else {
            return (
                <Mensagem onDoubleClick={() => this.props.deletar(this.props.id)}>
                    {this.props.nomeUsuario} {this.props.id}: <MensagemContent>{this.props.mensagemUsuario}</MensagemContent>
                </Mensagem>)
        }
    }
}

export default SecaoListarMensagens;
