import React, {Component} from "react";

export default class Contador extends Component{

    state = {
        numero: this.props.numeroInicial
    }

    render(){
        return(
            <div>
                <h2>Contador</h2>
                <p>{this.state.numero}</p>
            </div>
        )
    }
}