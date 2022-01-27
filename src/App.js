import './App.css';
import axios, { Axios } from 'axios';
import profile from './images/profile.png'
import twitter from './images/twitter.png'

import { useEffect, useState } from 'react';
import Coin from './components/Coin';

function App() {
  const [ListofCoin, setListofCoin] = useState([]);
  const [searchedWord, setSearchedWord] = useState("")
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then((response) => {
      setListofCoin(response.data.coins)
    })
  }, []);
  const filteredWord = ListofCoin.filter((coin) => {
    return coin.symbol.toLowerCase().includes(searchedWord.toLowerCase())
  })
  return (
    <div className="App">
      <div className='info'>
        <h3><a href='#'>Crypto ReactJS App</a></h3>
        <div className='detailInfo'>
          <img src={profile} alt='' />
          <div className='dtinfo'>
            <p>Rana Muzamal</p>
            <a href='https://twitter.com/RanaMuz10988803'>follow on twitter </a>
          </div>

        </div>
      </div>
      <div className='cryptoSearch'>
        <input type='text' placeholder='Search Coin' onChange={(event) => { setSearchedWord(event.target.value) }} />
      </div>
      <div className='cryptoDisplay'>
        {filteredWord.map((coin) => {
          return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        })}
      </div>
      <div className='cryptofooter'>
        <p>Copyright © 2022 Rana Muzamal </p>
      </div>
    </div>
  );
}

export default App;
