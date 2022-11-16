import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RickyMortyItem = ({url}) => {

    const [characterItem, setCharacterItem] = useState({})
    
    useEffect(() => {
        axios.get(url)
        .then(res => setCharacterItem(res.data));
    },[])

    return (
        
        <div>
          {characterItem.name}
          <br/>
          <img src={characterItem.image} alt=""></img>
        </div>
        
    );
};

export default RickyMortyItem;