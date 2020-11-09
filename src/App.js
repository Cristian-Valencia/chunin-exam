import './App.css';
import Navigation from "./components/navigation/navigation.component"
import Pages from "./components/pages/pages.component"
import Footer from "./components/footer/footer.component"
import LoadingPage from "./components/loadingPage/loadingPage";
import {  BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  // qua si possono scrivere le variabili e le funzioni

  const [showLoadingPage,setShowLoadingPage]= useState(false);

  
    useEffect(() => {
      setTimeout(
        function(){
          setShowLoadingPage(true);
    
        }, 0);
    });

  return (

    <div>

    { 
      
      showLoadingPage === true
      ?
      <div className="App">
        <Router>
          <Navigation/>
          <Pages/>
          <Footer/>
        </Router>
      </div>
      :
      <LoadingPage />

    }

    </div>
    
  );
}

export default App;
