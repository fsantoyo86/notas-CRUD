import React from 'react';
import { useForm } from "react-hook-form";

export const NotaForm = ({nota, onSubmit})=>{
    const { register, handleSubmit } = useForm({
      defaultValues: {
        titulo: nota ? nota.titulo : "",
        mensaje: nota ? nota.mensaje : "",
        autor: nota ? nota.autor : "",

      },
    });

    const submitHandler = handleSubmit((data) => {
      onSubmit(data);
    });
    return (

          <form onSubmit={submitHandler} className="bg-gray-700 p-4 rounded-lg text-white">
            <div className="grid grid-cols-2">
              <label className="mb-3" htmlFor="text">
                Titulo:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="titulo"
                id="titulo"
                placeholder="Titulo"
              />
              <label className="mb-3" htmlFor="text">
                Mensaje:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="mensaje"
                id="mensaje"
                placeholder="mensaje"
              />
              <label className="mb-3" htmlFor="text">
                Autor:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="autor"
                id="autor"
                placeholder="autor"
              />
              </div>
            <div className="flex justify-end mt-5">
              <button
                className="bg-red-500 rounded p-3 text-white hover:bg-red-700"
                type="submit"
              >
                Guardar Datos
              </button>
            </div>
          </form>
    );

}