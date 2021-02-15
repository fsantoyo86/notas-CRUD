import React , {useState, useEffect} from 'react';
import { useRouteMatch } from 'react-router-dom';
import {NotaForm} from './NotaForm';
import { useHistory } from "react-router-dom";
import axios from './axios';


export default function EditNota() {
     const history = useHistory();

    const match = useRouteMatch();
    const [nota, setNota] = useState();
  
      useEffect(() => {
        const fetchEmp = async()=>{
          const not = await axios.get(`/api/notas/${match.params.id}`);
          setNota(not.data);
        }
        fetchEmp();
      }, []);

      const onSubmit = async (data)=>{
          await axios.put(`/api/notas/${match.params.id}`, data);
          history.push('/');
      }

      return nota ? (<div className="flex flex-wrap justify-center">
        <div className="mt-3">
          <h3 className="text-blue-700 font-bold text-3xl p-3 mb-3">
            Editar nota
          </h3><NotaForm nota={nota} onSubmit={onSubmit}/></div></div>) : (<div>Loading...</div>);
  }
