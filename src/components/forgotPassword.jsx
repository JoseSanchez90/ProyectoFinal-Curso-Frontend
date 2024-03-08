import React from 'react'
import BackPass from '../assets/backpass.jpg'

function ForgotPassword() {


  return (
    
    <section className="bg-cover bg-center bg-no-repeat dark:bg-gray-900 " style={{ backgroundImage: `url(${BackPass})` }}>
        <div className=" max-w-3xl px-12 mx-auto text-center pb-96 pt-44">
        
            <h1 className="text-3xl font-bold text-white">Recuperar contraseña</h1>
            <p className="max-w-md mx-auto mt-5 text-gray-300 font-semibold">Si olvidaste tu contraseña coloca tu correo electronico y revisar en tus mensajes o spam.</p>

            <div className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                
                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-lg sm:mx-2  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Correo electronico" />

                <button className="px-8 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-lg sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Enviar
                </button>
            </div>
        </div>
    </section>
    
  )
}

export default ForgotPassword