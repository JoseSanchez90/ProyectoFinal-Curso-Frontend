import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../components/cartContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([])
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/productos/${productId}`);
  }; 

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const result = await axios('https://65d693b3f6967ba8e3be3df3.mockapi.io/api/productos');
        setProducts(result.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };  

    fetchProducts();

  }, []);

  return (
    <section className="text-gray-400 bg-gray-400 body-font">
      <div className="container px-5 pb-24 pt-24 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {products.map((product) => (
          
            <div key={product.id} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-10" >
              <img src={product.img} alt={product.img} className="w-full h-64 bg-gray-300 object-fill rounded-lg shadow-md cursor-pointer" onClick={() => handleProductClick(product.id)} />

              <div className="w-56 -mt-10 overflow-hidden bg-white bg-opacity-60 rounded-lg shadow-lg md:w-64 dark:bg-gray-800 dark:bg-opacity-50">

                <h3 className="py-2 font-bold text-center text-gray-800  dark:text-white">{product.nameProduct}</h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">

                  <span className="font-bold text-gray-800 dark:text-gray-200">S/ {Number(product.price).toFixed(2)}</span>

                  <button className=" px-2 py-2 text-xs font-semibold text-white uppercase bg-gray-800 rounded hover:bg-gray-950 dark:hover:bg-gray-600 focus:outline-none transition duration-150 ease-in-out transform hover:-translate-y-1 hover:-translate-x-1 shadow-lg hover:shadow border-gray-900 hover:border-gray-700 active:bg-green-600 active:shadow-inner" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Añadir al carrito</button>

                </div>
              </div>
              
            </div>          
            
          ))}
        </div>
      </div>
    </section>

  );
};

export default Products;
