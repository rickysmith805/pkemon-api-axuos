import {useState, useEffect} from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';


function App() {

  const[pokemon,setPokemon] = useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => setPokemon(res.data.results))
    .catch(err => console.log(err))
  },[])

  
  return (
    <div className="App">
      {
        pokemon.map((p,i) => {
          return <PokemonCard 
                      pokemon={p}
                      key={i}
                  />

        })
      }
    </div>
  );
}

export default App;
