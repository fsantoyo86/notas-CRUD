import React , {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import {EmpleadoForm} from './EmpleadoForm';
import { useHistory } from "react-router-dom";
import axios from './axios';


export default function EditEmpleado() {
     const history = useHistory();

    const match = useRouteMatch();
    const [empleado, setEmpleado] = useState();
  
      useEffect(() => {
        const fetchEmp = async()=>{
          const emple = await axios.get(
            `/api/empleados/${match.params.id}`
          );
          setEmpleado(emple.data);
        }
        fetchEmp();
      }, []);

      const onSubmit = async (data)=>{
          //await updateEmpleado(data, match.params.id);
          await axios.put(`/api/empleados/${match.params.id}`, data);
          history.push('/');
      }

      return empleado ? (<div className="flex flex-wrap justify-center bg-gray-200 h-screen">
        <div className="mt-3">
          <h3 className="text-blue-700 font-bold text-3xl p-3 mb-3">
            Editar Empleado
          </h3><EmpleadoForm empleado={empleado} onSubmit={onSubmit}/></div></div>) : (<div>Loading...</div>);
  }
