import React from 'react';
import Main from "./appearances/Main";
import PokemonDetailed from "./appearances/PokemonDetailed";

const App = () => {
  return (
    <div className="container">
      <Main />
      <PokemonDetailed />
    </div>
  );
}

export default App;
