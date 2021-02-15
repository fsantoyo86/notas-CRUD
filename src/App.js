import React from 'react';
import {Route,Switch, Link} from 'react-router-dom';
import CreateNota from './CreateNota';
import ListaNotas from './ListaNotas';
import EditNota from './EditNota';

function App() {
  return (
    <div>
      <nav className="flex justify-center bg-gray-700 items-center text-white p-5">
        <ul>
          <Link to="/create">
          <li className="text-xl hover:text-gray-300 cursor-pointer">
            Crear nota
          </li>
          </Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={ListaNotas}></Route>
        <Route path="/edit/:id" component={EditNota}></Route>
        <Route path="/create" component={CreateNota}></Route>
      </Switch>
    </div>
  );
}

export default App;
