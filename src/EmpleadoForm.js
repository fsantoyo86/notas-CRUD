import React from 'react';
import { useForm } from "react-hook-form";

export const EmpleadoForm = ({empleado, onSubmit})=>{
    const { register, handleSubmit } = useForm({
      defaultValues: {
        nombre: empleado ? empleado.nombre : "",
        apellido: empleado ? empleado.apellido : "",
        Puesto: empleado ? empleado.Puesto : "",
        celular: empleado ? empleado.celular : "",
        correo: empleado ? empleado.correo : "",
      },
    });

    const submitHandler = handleSubmit((data) => {
      onSubmit(data);
    });
    return (
      
          <form onSubmit={submitHandler} className="">
            <div className="grid grid-cols-2">
              <label className="mb-3" htmlFor="text">
                Nombre:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
              />
              <label className="mb-3" htmlFor="text">
                Apellido:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="apellido"
                id="apellido"
                placeholder="Apellido"
              />
              <label className="mb-3" htmlFor="text">
                Puesto:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="Puesto"
                id="Puesto"
                placeholder="Puesto"
              />
              <label className="mb-3" htmlFor="text">
                Celular:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="celular"
                id="celular"
                placeholder="Celular"
              />
              <label className="mb-3" htmlFor="text">
                Dirección correo:
              </label>
              <input
                className="mb-2 px-1 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-non focus:shadow-outline w-full"
                ref={register}
                type="text"
                name="correo"
                id="correo"
                placeholder="Dirección correo"
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