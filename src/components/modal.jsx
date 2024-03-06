
import React from 'react';
import Card from '../assets/credit-card.png'
import '../App.css'
import Card2 from '../assets/credit-card.svg'
import { useState } from 'react';
import { useCart } from '../components/cartContext'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const { totalPrice } = useCart();

  const [inputValues, setInputValues] = useState({
    sixteenDigits: '', // Para el input de 16 dígitos
    twoDigits: '', // Para el input de 2 dígitos
    fourDigits: '', // Para el input de 4 dígitos
    threeDigits: '', // Para el input de 3 dígitos
  });    

    const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    // Validación para el input de 16 dígitos
    if (name === 'sixteenDigits' && !(/^\d*$/.test(newValue) && newValue.length <= 16)) {
      return; // No actualiza el estado si no pasa la validación
    }

    // Validación para el input de 2 dígitos
    if (name === 'twoDigits' && !(/^\d*$/.test(newValue) && newValue.length <= 2)) {
      return; // No actualiza el estado si no pasa la validación
    }

    // Validación para el input de 2 dígitos
    if (name === 'fourDigits' && !(/^\d*$/.test(newValue) && newValue.length <= 4)) {
        return; // No actualiza el estado si no pasa la validación
      }

    if (name === 'threeDigits' && !(/^\d*$/.test(newValue) && newValue.length <= 3)) {
      return; // No actualiza el estado si no pasa la validación
    }

    setInputValues({
      ...inputValues,
      [name]: newValue,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        {children}
    
            <div  className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-2">
            <div className="overflow-hidden rounded-lg bg-white shadow-xl sm:w-1/2 sm:max-w-sm">

                <div className="relative p-6">

                    <img src={Card} alt={Card} />

                    <div className="relative flex items-center mt-8">
                    <input type="number" name="sixteenDigits" value={inputValues.sixteenDigits} className="block w-full py-2 text-gray-700 bg-white border rounded-lg pr-11 pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Numero de tarjeta" onChange={handleChange} required/>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <img src={Card2} alt={Card2} className="w-8"/>
                    </span>
                    </div>

                    <div className="relative flex items-center mt-4">
                    <input type="text" className="block w-full py-2 text-gray-700 bg-white border rounded-lg pr-11 pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Nombre del titular de la tarjeta" required />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">

                    </span>
                    </div>

                    <div className="relative flex items-center mt-4 gap-6">
                    <input type="number" name="twoDigits" value={inputValues.twoDigits} className="block w-full py-2 text-gray-700 bg-white border rounded-lg pr-11 pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mes" onChange={handleChange} required/>
                    <input type="number" name="fourDigits" value={inputValues.fourDigits} className="block w-full py-2 text-gray-700 bg-white border rounded-lg pr-11 pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Año" onChange={handleChange} required/>
                    <input type="number" name="threeDigits" value={inputValues.threeDigits} className="block w-full py-2 text-gray-700 bg-white border rounded-lg pr-11 pl-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="CVV" onChange={handleChange} required/>
                    </div>
                    <div className="mt-6 font-bold">
                    <span>Total a pagar: </span>
                    <span className="text-right flex-grow mr-1">S/ {totalPrice}</span>
                    </div>
                </div>

                <div className="flex justify-between px-6 pb-6">
                <div className=" bg-secondary-50 ">
                    <button type="submit" className="bg-lime-600 text-white px-24 py-2 font-bold rounded-md hover:bg-lime-700 focus:outline-none">Pagar</button>
                </div>

                <div className=" bg-secondary-50 ">
                    <button type="submit" onClick={onClose} className="bg-red-600 text-white px-3 py-2 font-bold rounded-md hover:bg-red-700 focus:outline-none">Cancelar</button>
                </div>
                </div>

            </div>
            </div>
  
      </div>
    </div>
  );
};

export default Modal;
