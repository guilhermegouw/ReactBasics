import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaBody from "./components/TabelaBody";
import TabelaFoot from "./components/Tabelafoot";


class App extends Component {
  state = {
    livros: []
  };

  componentDidMount() {
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({ livros }))
    .catch(function(error) {
      console.log("Erro na requisição");
    })
    .finally(function() {
      console.log("Sempre retorna");
    });
  };
  handleRemoverLinha = (id) => {
    const livros = this.state.livros.filter(l => l.id !== id);
    this.setState({livros})
  };
  handleOrdenarIsbnCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
    a.id < b.id ? -1: 0
    );
    this.setState({ livros });
  };
  handleOrdenarIsbnDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) =>
    a.id < b.id ? -1: 0
    );
    livros.reverse();
    this.setState({ livros });
  };
  handleOrdenarTituloCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) =>
    a.titulo < b.titulo ? -1: 0
    );
    this.setState({ livros });
  };
  handleOrdenarTituloDecrescente = titulo => {
    const livros = this.state.livros.sort((a, b) =>
    a.titulo < b.titulo ? -1: 0
    );
    livros.reverse();
    this.setState({ livros });
  };
  handleOrdenarAutorCrescente = (autor) => {
    const livros = this.state.livros.sort((a, b) =>
    a.autor < b.autor ? -1: 0
    );
    this.setState({ livros });
  }
  handleOrdenarAutorDecrescente = (autor) => {
    const livros = this.state.livros.sort((a, b) =>
    a.autor < b.autor ? -1: 0
    );
    livros.reverse();
    this.setState({ livros });
  }

  render () {
    return (
      <table className="tabela">
        <TabelaHead 
        ordenarTituloCrescente={ this.handleOrdenarTituloCrescente }
        ordenarTituloDecrescente={ this.handleOrdenarTituloDecrescente }
        ordenarAutorCrescente={ this.handleOrdenarAutorCrescente }
        ordenarAutorDecrescente={ this.handleOrdenarAutorDecrescente }
        ordenarIsbnCrescente={ this.handleOrdenarIsbnCrescente }
        ordenarIsbnDecrescente={ this.handleOrdenarIsbnDecrescente }
        />
        <TabelaFoot qdeLivros={this.state.livros.length}/>
        <TabelaBody 
        livros={this.state.livros}
        removerLinha = {this.handleRemoverLinha}
        />
      </table>
    );
  }
}

export default App;
