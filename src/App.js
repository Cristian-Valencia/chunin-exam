import logo from './logo.svg';
import './App.css';
import Navigation from "./components/navigation/navigation.component"
import Pages from "./components/pages/pages.component"
import Footer from "./components/footer/footer.component"

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
