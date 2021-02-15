import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from './axios';
import { useHistory } from "react-router-dom";


export default function ListaNotas() {
    const [items, setItems] = useState([]);
    const history = useHistory();


    useEffect(()=>{
        const fetchItems= async ()=>{
          const empleados = await axios.get("/api/notas");

          setItems(empleados.data);
        }

        fetchItems();
    },[]);

    const deleteEmpleado = async (id) => {
       await axios.delete(`/api/notas/${id}`);
       history.push("/");
    };

    return (
      <div className="flex items-center justify-center mt-3">
        <div className="flex flex-wrap w-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {items.map((todo) => (
            <div
              key={todo._id}
              className="grid grid-rows-3 m-3 h-56 bg-gray-600 rounded-lg shadow-xl"
            >
              <p className="bg-white w-auto m-2 rounded-t-lg p-1">
                {todo.mensaje}
              </p>
              <div className="block items-center text-white">
                <div className="flex justify-between ">
                  <h1 className="ml-2">{todo.titulo}</h1>
                  <Link to={`/edit/${todo._id}`}>
                    <button>
                      <svg
                        className="w-6 h-6 text-gray-100 ml-auto mr-3 hover:text-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                  </Link>
                </div>
                <h3 className="ml-2 text-white">Autor: {todo.autor}</h3>
              </div>
              <div className="flex justify-center h-auto items-center text-xl bg-pink-700 hover:bg-pink-600 p-0 text-white rounded-b-lg">
                <Link to={`/edit/${todo._id}`}>
                  <button onClick={() => deleteEmpleado(todo._id)}>
                    Eliminar
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
