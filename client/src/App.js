import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/AboutLanding/About';
import Landing from './components/Landing/Landing';
import { Videogames } from './components/Videogames/Videogames'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/videogames' component={Videogames} />
        <Route exact path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
