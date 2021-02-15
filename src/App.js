import React from 'react';
import {Route,Switch, Link} from 'react-router-dom';
import CreateEmpleado from './CreateEmpleado';
import EmpleadoList from './EmpleadoList';
import EditEmpleado from './EditEmpleado';

function App() {
  return (
    <div>
      <nav className="">
        <ul className="flex flex-wrap justify-center m-0 p-5 bg-pink-700 text-white">
          <li className="px-4 hover:text-gray-300">
            <Link to="/">Empleados</Link>
          </li>
          <li className="px-4 hover:text-gray-300">
            <Link to="/create">Registrar</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={EmpleadoList}></Route>
        <Route path="/edit/:id" component={EditEmpleado}></Route>
        <Route path="/create" component={CreateEmpleado}></Route>
      </Switch>
    </div>
  );
}

export default App;
