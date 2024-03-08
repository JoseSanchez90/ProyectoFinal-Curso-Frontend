import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../components/cartContext';

function ProductView() {
  const [product, setProduct] = useState(null);
  let { productId } = useParams();
  const { addToCart } = useCart();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [productId]);

  if (!product) {
    return <div className="text-black font-bold text-xl">Cargando...</div>;
  }

  return (

<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 pt-20 pb-52 mx-auto">
    <div className="lg:w-5/6 mx-auto ">
      <button className="bg-indigo-500 hover:bg-indigo-700 rounded-full w-12 h-12 grid items-center justify-center mb-4" onClick={() => navigate(-1)}><svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12L4.29289 11.2929L3.58579 12L4.29289 12.7071L5 12ZM17 13C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11V13ZM8.29289 7.29289L4.29289 11.2929L5.70711 12.7071L9.70711 8.70711L8.29289 7.29289ZM4.29289 12.7071L8.29289 16.7071L9.70711 15.2929L5.70711 11.2929L4.29289 12.7071ZM5 13H17V11H5V13Z" fill="#ffffff"></path> </g></svg></button>
    </div>

    <div className="lg:w-5/6 mx-auto flex flex-wrap">

      <img alt={product.img} className="lg:w-1/2 w-full lg:h-auto h-64 object-contain" src={product.img} />

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-6 lg:mt-0">

        <h1 className="text-gray-900 text-4xl title-font font-bold">{product.nameProduct}</h1>
        <div className="flex mb-1">

        <div className=" grid grid-cols-2 my-5 font-semibold justify-items-start">
            <h2 className="text-sm mb-2 text-gray-700 tracking-widest ">SKU: <strong className="text-black">######</strong></h2>
            <h2 className="text-sm mb-2 text-gray-700 tracking-widest">Disponibilidad: <strong className="text-green-400">{product.availability}</strong></h2>
            <h2 className="text-sm mb-2 text-gray-700 tracking-widest ">Marca: <strong className="text-black">{product.brand}</strong></h2>
            <h2 className="text-sm mb-2 text-gray-700 tracking-widest ">Categoria: <strong className="text-black">{product.category}</strong></h2>
        </div>
          
        </div>

        <h2 className="text-black text-lg font-bold mb-1">Descripcion:</h2>
          <p className="leading-relaxed">{product.description}.</p>

        <div className="flex mt-4 items-center border-b-2 border-gray-700">
          
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-600 ml-3">4 Reseñas</span>
          </span>
        </div>

        </div>

          <div className="flex flex-col max-w-52">
            <span className="font-bold text-2xl text-blue-700 mt-6">Precio: ${product.price}</span>
            <span className="font-bold text-xl text-gray-700 mt-4">Stock: {product.quantity}</span>
          </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded mt-8" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Agregar al carrito</button>

      </div>
    </div>
  </div>
</section>

          );
}

export default ProductView;
