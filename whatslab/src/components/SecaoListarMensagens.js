import styled from "styled-components"
import {Component} from "react"

const Mensagem = styled.p `
    
    padding: 10px;
    position: relative;
    bottom: 0;
`

class SecaoListarMensagens extends Component {
    render() {
        return( 
        <Mensagem>
           {this.props.nomeUsuario}: <span>{this.props.mensagemUsuario}</span>
        </Mensagem>) 
    }
}

export default SecaoListarMensagens;
