import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Topbar/>
    <div className="App">
      <Sidebar />
      {/* <Cards/> */}
    </div>
    </Router>
  );
}

export default App;
