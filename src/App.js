import React, {useState, useContext} from 'react';
import { appendTooltip } from 'rsuite/esm/utils';
import CardGroup from './components/CardGroup';
import Navbar from './components/Navbar';
import './App.css'
import CountryDropdown from './components/CountryDropdown';
import MyContext from './context/MyContext';

export default function App() {
  const demo = {
    country: 'in',
    category: '',
  };
  const [contextValue, setContextValue] = useState(demo);
  
  return (
    <>
      <MyContext.Provider value={[ contextValue, setContextValue ]}>
        <Navbar></Navbar>
        <CountryDropdown></CountryDropdown>
        <CardGroup></CardGroup>
      </MyContext.Provider>
    </>
  );
}