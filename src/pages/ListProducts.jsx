import { useState } from 'react';
import React from 'react';
import { useCart } from '../components/cartContext';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'; 
import Container from '../components/Container'
import Modal from '../components/modal'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import DraggableMarker from '../components/draggable';

function ListProducts({ products }) {
  const { removeFromCart, addToCart, decreaseQuantity, cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const open = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const center = {
    lat: -12.0630198,
    lng: -77.0384351,
  }

  const totalCompra = products.reduce(
    (suma, product) => suma + product.price * product.cantidad,
    0
  );

  const handleClearCart = () => {
    cartItems.forEach(item => removeFromCart(item.id));
  };

  const [inputValues, setInputValues] = useState({
    eightDigits: '', // Para el input de 8 dígitos
    nineDigits: '', // Para el input de 9 dígitos
    nombreCompleto: '', // Para el input de nombre completo
    dirección: '', // Para el input de dirección
  });  

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    // Validación para asegurar que el input sea numérico y no exceda el límite de caracteres
    if (name === 'eightDigits' && value.length <= 8) {
      setInputValues({
        ...inputValues,
        [name]: value.replace(/\D/g, ''), // Elimina cualquier carácter no numérico
      });
    } else if (name === 'nineDigits' && value.length <= 9) {
      setInputValues({
        ...inputValues,
        [name]: value.replace(/\D/g, ''),
      });
    } else if (name !== 'eightDigits' && name !== 'nineDigits') {
      // Manejo para otros inputs que no tienen restricción de solo dígitos
      setInputValues({
        ...inputValues,
        [name]: value,
      });
    }
  };

  const handleCheckout = () => {
    const { eightDigits, nineDigits, nombreCompleto, dirección } = inputValues;
    // Verifica que todos los campos estén llenos
    if (!eightDigits || !nineDigits || !nombreCompleto || !dirección || eightDigits.length < 8 || nineDigits.length < 9) {
      alert("Por favor, llene todos los campos correctamente.");
      return;
    }

    // Si todos los campos están llenos, procede a abrir el modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold border-b-blue-500 border-b-8 w-80 mb-10 mx-auto">Resumen de la orden</h1>
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
        </ul>
        <div className="flex justify-between mt-6">
        <button onClick={handleClearCart} className="bg-red-600 text-white px-4 py-2 font-bold rounded-md hover:bg-red-700 focus:outline-none">
              Vaciar carrito
            </button>
            <p className="font-bold text-black text-lg">Total: S/ {totalCompra.toFixed(2)}</p>
          </div>

          <div className="mt-20 sm:w-3/4 flex flex-col mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-b-blue-500 border-b-8 w-64 mx-auto">Datos personales</h2>
          {/* form */}
          <form onSubmit={() => {}} className="w-full justify-between">
            <div>
              <label
                htmlFor="nombreCompleto"
                className="block text-md font-medium text-gray-900"
              >
                Nombre Completo:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="nombreCompleto"
                  id="nombreCompleto"
                  autoComplete="given-name"
                  value={inputValues.nombreCompleto}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6 px-2"
                required />
              </div>
            </div>
          <div className="flex flex-row justify-between w-full gap-2">
            <div>
              <label
                htmlFor="dni"
                className="block text-md font-medium text-gray-900"
              >
                DNI:
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="eightDigits"
                  id="eightDigits"
                  autoComplete="given-number"
                  value={inputValues.eightDigits}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  onChange={handleChange} required/>
              </div>
            </div>
          
            <div>
              <label
                htmlFor="dni"
                className="block text-md font-medium text-gray-900"
              >
                Telefono:
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="nineDigits"
                  id="nineDigits"
                  autoComplete="given-number"
                  value={inputValues.nineDigits}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  onChange={handleChange} required/>
              </div>
            </div>
          </div>
            <div className="mt-6">
              <label
                htmlFor="dirección"
                className="block text-md font-medium text-gray-900"
              >
                Dirección:
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="dirección"
                  id="dirección"
                  value={inputValues.dirección}
                  onChange={handleChange}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                required/>
              </div>
            </div>

            <h6 className="text-sm text-red-600 mt-6 font-bold italic">Por favor selecciona tu ubicacion</h6>
            <div className="mt-1" id="map" style={{height: "300px", width: "100%", border: "1px solid black"}}>
            <MapContainer center={center} zoom={15}>
              <TileLayer
                attribution={open}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <DraggableMarker />
              {/* <Marker position={[-12.0630198, -77.0384351]}>
              </Marker> */}
          </MapContainer>
            </div>

          </form>
        </div>

          <div className="flex justify-end mt-6">
            <button onClick={handleCheckout} className="bg-lime-600 text-white px-4 py-2 font-bold rounded-md hover:bg-lime-700 focus:outline-none">
              Continuar compra
            </button>
          </div></>
      ) : (
        <div className="flex justify-center items-center h-full bg-gray-600 py-52 w-full rounded-lg ">
          <p className="text-gray-400">No hay productos en el carrito.</p>
        </div>
      ) }
       <Modal isOpen={isModalOpen} onClose={handleCloseModal} totalPrice={totalCompra}>
        
      </Modal>
      
    </Container>
  );
}

export default ListProducts;
