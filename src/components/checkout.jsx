import { useContext } from "react"
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
      <h1 className="text-3xl font-bold my-5 border-b-blue-500 border-b-8 w-96">Resumen de la orden</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <ListProducts products={cartItems} />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 border-b-blue-500 border-b-8 w-64">Datos personales</h2>
          {/* form */}
          <form onSubmit={() => {}}>
            <div>
              <label
                htmlFor="nombreCompleto"
                className="block text-md font-medium text-gray-900"
              >
                Nombre Completo:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="nombreCompleto"
                  id="nombreCompleto"
                  autoComplete="given-name"
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-6 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="dirección"
                className="block text-md font-medium text-gray-900"
              >
                Dirección:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="dirección"
                  id="dirección"
                  autoComplete="given-name"
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default Checkout;
