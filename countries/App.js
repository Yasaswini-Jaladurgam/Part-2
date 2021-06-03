import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Find from './components/Find';
import List from './components/List';

const App = () => {
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data));
  }, []);
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
 

  return (
    <div>
      {
        countries.length ?
        <>
          <Find country={country} setCountry={setCountry} />
          { country && <List country={country} countries={countries} setCountry={setCountry} /> }
        </>
        :
        <p>Loading application...</p>
      }
    </div>
  );
};

export default App;