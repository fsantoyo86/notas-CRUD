import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
//import axios from 'axios';
import axios from './axios';
import { useHistory } from "react-router-dom";


export default function EmpleadoList() {
    const [items, setItems] = useState([]);
    const history = useHistory();


    useEffect(()=>{
        const fetchItems= async ()=>{
          //const empleados = await axios.get('http://localhost:4000/api/empleados');
          const empleados = await axios.get("/api/empleados");

          setItems(empleados.data);
        }

        fetchItems();
    },[]);

    const deleteEmpleado = async (id) => {
       //await axios.delete(`http://localhost:4000/api/empleados/${id}`);
       await axios.delete(`/api/empleados/${id}`);
       history.push("/");
    };

    return (
      <div className="flex items-center justify-center">
        <div className="container">
          <table className="border-collapse w-full mt-5">
            <thead>
              <tr>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Nombre
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Apellido
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Puesto
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Celular
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Dirección correo
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Acción
                </th>
                <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((todo) => (
                <tr
                  key={todo._id}
                  className="bg-white  flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                >
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Nombre
                    </span>
                    {todo.nombre}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Apellido
                    </span>
                    {todo.apellido}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Puesto
                    </span>
                    {todo.Puesto}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Celular
                    </span>
                    {todo.celular}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Correo
                    </span>
                    {todo.correo}
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static text-blue-600 underline">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Acción
                    </span>
                    <Link to={`/edit/${todo._id}`}>
                      <button className="bg-blue-500 text-white rounded-lg px-2 hover:bg-blue-300">
                        Editar
                      </button>
                    </Link>
                  </td>
                  <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static text-blue-600 underline">
                    <span class="lg:hidden absolute top-0 left-0 bg-gray-300 w-24 px-3 py-4 text-xs font-bold uppercase">
                      Acción
                    </span>
                    <Link to={`/edit/${todo._id}`}>
                      <button onClick={()=>deleteEmpleado(todo._id)} className="bg-red-500 text-white rounded-lg px-2 hover:bg-red-300">
                        Eliminar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
