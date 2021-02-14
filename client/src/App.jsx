import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [playerName, setPlayerName] = useState('');
  const searchPlayer = () => {
    if (!playerName) {
      return;
    }
    axios
      .get(`/player/${playerName}`)
      .then((res) => {
        if (res.error) {
          return console.log('Player not found');
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Página para edaters qls</h1>
      <input
        className="bg-green-200"
        type="text"
        name="name"
        id="name"
        onChange={(e) => {
          setPlayerName(e.target.value);
        }}
      />
      <button onClick={searchPlayer}>Search</button>
    </div>
  );
}

export default App;
