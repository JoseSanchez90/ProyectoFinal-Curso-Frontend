import { useContext, useState } from "react"
import CartContext from './cartContext'
import { useForm } from 'react-hook-form'
import Container from "../components/Container"
import ListProducts from "../pages/ListProducts"

function Checkout() {
  const {
    register, //para registrar que inputs va a manejar react-hook-forms
    handleSubmit, //para manejar el submit del formulario react-hook-forms
    formState: { errors }, // errors, para segun la validación que indiquemos se nos muestre un error adecuado
    watch, //para escuchar cambios en los inputs react-hook-forms
  } = useForm();

  const { cartItems } = useContext(CartContext);

  return (
    <Container>
      
      <div className="grid grid-cols-1 sm:w-full  ">
        <div className=" sm:w-full ">
            <ListProducts products={cartItems} />
        </div>
      </div>
    </Container>
  );
}

export default Checkout;
