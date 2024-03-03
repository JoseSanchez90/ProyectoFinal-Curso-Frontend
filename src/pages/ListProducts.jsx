import React from 'react';
import { useCart } from '../components/cartContext';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'; 
import {Container} from '../components/Container'


function ListProducts({ products }) {
  const { removeFromCart, addToCart, decreaseQuantity, cartItems } = useCart(); // Agregar la función decreaseQuantity

  const totalCompra = products.reduce(
    (suma, product) => suma + product.price * product.cantidad,
    0
  );

  const handleClearCart = () => {
    cartItems.forEach(item => removeFromCart(item.id));
  };

  const handleCheckout = () => {
    console.log("Finalizar compra");
    // Aquí puedes implementar la lógica para finalizar la compra
  };

  return (
    <Container>
      {cartItems.length > 0 ? (
        <><ul className="grid gap-y-2">
          {products.length > 0 &&
            products.map((product, index) => (
              <li key={product.id} className={`grid grid-cols-4 gap-4 rounded-md shadow-md p-4 ${index !== 0 ? 'border-t border-gray-200' : ''} bg-gray-700`}>
                <div className="col-span-2 flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full bg-gray-300"
                    src={product.img}
                    alt={product.nameProduct} />
                  <div>
                    <h3 className="font-semibold text-white text-sm truncate">{product.nameProduct}</h3>
                    <p className="text-white text-xs truncate">{product.address}</p>
                  </div>
                </div>
                <div className="col-span-2 flex justify-between items-center text-right">
                  <div>
                    <p className="font-semibold text-white text-sm">Total: S/ {(product.price * product.cantidad).toFixed(2)}</p>
                    <p className="text-white text-xs">
                      <span className="font-semibold">P.U:</span> S/ {product.price}, <span className="font-semibold">Cant.:</span> {product.cantidad} Unid.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => addToCart(product)} className="text-green-600 hover:text-green-800 focus:outline-none">
                      <FaPlus className="w-4 h-4" style={{ opacity: 0.7 }} />
                    </button>
                    {/* Botón para decrementar la cantidad */}
                    <button onClick={() => decreaseQuantity(product.id)} className="text-blue-600 hover:text-blue-800 focus:outline-none">
                      <FaMinus className="w-4 h-4" style={{ opacity: 0.7 }} />
                    </button>
                    <button onClick={() => removeFromCart(product.id)} className="hover:text-white focus:outline-none">
                      <FaTrashAlt className="w-4 h-4" style={{ opacity: 0.7, color: 'white' }} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul><div className="flex justify-end mt-4">
            <p className="font-bold text-black text-lg">Total:</p>
            <p className="ml-2 font-semibold text-black text-lg">S/ {totalCompra.toFixed(2)}</p>
          </div><div className="flex justify-between mt-4">
            <button onClick={handleClearCart} className="bg-red-600 text-white px-4 py-2 font-bold rounded-md hover:bg-red-700 focus:outline-none">
              Vaciar carrito
            </button>
            <button onClick={handleCheckout} className="bg-lime-600 text-white px-4 py-2 font-bold rounded-md hover:bg-lime-700 focus:outline-none">
              Continuar compra
            </button>
          </div></>
      ) : (
        <div className="flex justify-center items-center h-full bg-gray-600 py-28 rounded-lg">
          <p className="text-gray-400">No hay productos en el carrito.</p>
        </div>
      ) }
      
    </Container>
  );
}

export default ListProducts;
