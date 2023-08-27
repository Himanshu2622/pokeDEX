import React, { Component } from 'react';
import './App.css';
import Pokemon from './pokemon.json'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();

    this.state = {
      pokemon : Pokemon,
      searchField: '',
    };
  }
  render(){

    const {pokemon, searchField} = this.state;
    const filteredpokemon = pokemon.filter(pokemon => 
        pokemon.name.english.toLowerCase().includes(searchField.toLowerCase())
    );

    return(
      <div className="App">
        <h1> PokéDEX</h1>
        <SearchBox
        placeholder = 'Search Pokemons'
        handleChange = {e => {this.setState({searchField : e.target.value})}}
      />  
        <CardList pokemon = {filteredpokemon}></CardList>
      </div>
    )  
  }
}

export default App;
