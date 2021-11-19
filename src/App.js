import React from 'react';
import Produtos from './Components/Produtos/Produtos'
import CardSection from './Components/CardSection/CardSection'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () =>{
  return (
    <div className="App">
      <Produtos />
      <CardSection />
    </div>
  );
}

export default App;
