import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
//import Home from './views/Home'
import Home from './views/Home'
import Videos from './components/Videos'

function App() {
  return (
    <Router>
      <div>
        <h2>Videos</h2>
        <ul>
          <Videos/>
        </ul>

        <Switch>
          <Route path="/:id">
            <Child />
          </Route>
        </Switch>
        <Home />
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
