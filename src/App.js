import './App.css';
import Navigation from "./components/navigation/navigation.component"
import Pages from "./components/pages/pages.component"
import Footer from "./components/footer/footer.component"
import {  BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Pages/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
