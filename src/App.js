import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import RickyMortyItem from './components/RickyMortyItem';


function App() {

const [character, setCharacter] = useState({});
const [typeId, setTypeid]= useState("");

useEffect(() =>{
  const randomId = Math.floor(Math.random()*126)+1;
  axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
  .then(res => setCharacter(res.data));
},[])
console.log(character);

const searchCharacter = () => {
  axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
  .then(res=> setCharacter(res.data));
}

  return (
    <div className="App">
    <h1>{character.name}</h1>
    <input type="text" value={typeId} onChange={e => setTypeid(e.target.value)} />
    <button onClick={searchCharacter}>Search</button>
    <div>
      {character.residents?.map(residents=>(
       <RickyMortyItem
        url={residents}
        key={residents}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
