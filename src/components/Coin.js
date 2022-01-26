import React from 'react';

function Coin({ name, icon, price, symbol }) {
    return <div className='coinDetail'>
        <h1>{name}</h1>
        <img src={icon} />
        <h2>{symbol}</h2>
        <h2>Price:{price}</h2>
    </div>;
}

export default Coin;
