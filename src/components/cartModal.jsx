import React from 'react';
import MyIcon from '../assets/removeCart.svg';
import { useCart } from '../components/cartContext';
import Buy from '../assets/buy.svg';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';


function CartModal() {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  const removeCart = () => {
    cartItems.forEach(item => removeFromCart(item.id));
  };

  return (
    <div className="absolute z-10 inset-x-0 flex flex-col mx-auto mt-7 sm:mt-2 w-full sm:max-w-md bg-gray-500 shadow-lg rounded-3xl">
      <div className="flex justify-between text-white bg-black py-1 px-10 text-sm rounded-t-xl font-bold">
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio</span>
        <span>SubTotal</span>
      </div>

      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className={`grid grid-cols-4 items-center px-6 text-sm ${index < cartItems.length - 1 ? "border-b border-gray-200" : ""}`}>
            <div className="flex justify-center mt-1 mb-1">
            <span className="text-black font-bold">{item.nameProduct}</span>
            </div>
            <div className="flex justify-center">
              <span className="text-black font-bold">{item.cantidad}</span>
            </div>
            <div className="flex justify-center">
              <span className="text-black font-bold">${item.price}</span>
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="text-black font-bold">${(item.price * item.cantidad).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)} className="ml-1 text-red-500 hover:text-red-700 font-bold">
                <FaTrashAlt style={{ color: 'white' }} /> {/* Utilizar el icono del tachito con color blanco */}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center py-0.5 font-bold text-sm sm:text-base">Tu carrito está vacío</p>
      )}

      <div className="flex flex-row justify-center text-white bg-black px-10 py-1 text-xs sm:text-sm font-bold">
        <span>Total: </span>
        <span className="text-right flex-grow mr-1">${total.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={removeCart}  className="bg-red-600 text-white w-full font-bold flex flex-row justify-center items-center gap-2">
          <img src={MyIcon} alt={MyIcon} width="20" height="20"/>
          Vaciar carrito
        </button>
      </div>
      <div>
        <Link to="/mis-pedidos" className="bg-lime-600  text-white w-full font-bold flex flex-row justify-center items-center gap-2 rounded-b-xl">
          <img src={Buy} alt={Buy} width="20" height="20"/>
          Ir a pagar
        </Link>
      </div>
    </div>
  );
}

export default CartModal;
