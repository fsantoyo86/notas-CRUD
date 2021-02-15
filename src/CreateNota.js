import React from 'react';
import {NotaForm} from './NotaForm';
import {useHistory} from 'react-router-dom';
import axios from './axios';

export default function CreateNota() {
   const history = useHistory();
    const onSubmit = async (data)=>{
        await axios.post("/api/notas",data);
        history.push('/');
    };

    return (
      <div className="flex flex-wrap justify-center bg-gray-200 h-screen">
        <div className="mt-3">
          <h3 className="text-gray-700 font-bold text-3xl p-3 mb-3">
           Nueva nota
          </h3>
          <NotaForm onSubmit={onSubmit} />
        </div>
      </div>
    );
}
