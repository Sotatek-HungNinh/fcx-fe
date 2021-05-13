import logo from './logo.svg';
import './App.css';
import ListTransaction from "./components/list-transaction/ListTransaction";
import Home from "./components/home/Home";
import Swap from "./components/swap/Swap";
import Nav from "./components/nav/Nav";
import {BrowserRouter as Router, Switch, Route} from '../node_modules/react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav></Nav>
        <Route path="/home" component={Home} />
        <Route path="/swap" component={Swap} />
        <Route path="/list-transaction" component={ListTransaction} />
      </div>
    </Router>
  );
}

export default App;
