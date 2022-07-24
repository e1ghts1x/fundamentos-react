import "./App.css"
import React from "react";


import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from"./components/comunicacao/DiretaPai"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";


export default (_) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">

      <Card titulo="#11 Componente Controlado" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10 Comunicação Indireta" color="#8bad39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09 Comunicação Direta" color="#008080">
        <DiretaPai></DiretaPai>
        </Card>

      <Card titulo="#08 Renderização Condicional" color="#09175b">
          <ParOuImpar numero={20}></ParOuImpar>
          <UsuarioInfo usuario={{nome: 'Emanuel'}}></UsuarioInfo>
          <UsuarioInfo usuario={{email: "emani@gmail.com"}}></UsuarioInfo>
        </Card>

        <Card titulo="#07 Repetição" color="#72b88c">
          <TabelaProdutos></TabelaProdutos>
        </Card>
        <Card titulo="#06 Repetição" color="#3fa9a0">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente com Filhos" color="#F1A">
          <Familia sobrenome="Kklin">
            <FamiliaMembro nome="Vendetta" />
            <FamiliaMembro nome="Altair" />
            <FamiliaMembro nome="Jotaro" />
          </Familia>
        </Card>

        <Card titulo="#04 Desafio Aleatório" color="#D7CDCC">
          <NumeroAleatorio min="1" max="100"></NumeroAleatorio>
        </Card>

        <Card titulo="#03 Fragmento" color="#1D1E2C">
          <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro" color="#9C528B">
          <ComParametro titulo="Situação do Aluno" aluno="Eskreee" nota={9.9} />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#59656F">
          <Primeiro></Primeiro>
        </Card>

      </div>
    </div>
  );
};
