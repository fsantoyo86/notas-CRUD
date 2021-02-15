import React from 'react';
import {EmpleadoForm} from './EmpleadoForm';
import {useHistory} from 'react-router-dom';
import axios from './axios';

export default function CreateEmpleado() {
   const history = useHistory();
    const onSubmit = async (data)=>{
        await axios.post("/api/empleados",data);
        history.push('/');
    };

    return (
      <div className="flex flex-wrap justify-center bg-gray-200 h-screen">
        <div className="mt-3">
          <h3 className="text-blue-700 font-bold text-3xl p-3 mb-3">
            Registro Empleado
          </h3>
          <EmpleadoForm onSubmit={onSubmit} />
        </div>
      </div>
    );
}
