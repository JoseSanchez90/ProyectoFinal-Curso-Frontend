
import Navbar from './components/navbar'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layaut from './components/layaut'
import Footer from './components/footer'
import Products from './pages/products'
import Contact from './pages/contact'
import About from './pages/about'
import Home from './pages/Home'
import ProductAdmin from './admin/productsAdmin'
import { CartProvider } from './components/cartContext'
import ProductView from './pages/productView'
import SignIn from './components/signin'
import SignUp from './components/signup'
import Checkout from './components/checkout'
import ForgotPassword from './components/forgotPassword'

function App() {

  return(
    <>  
      <div className="bg-gray-400 min-h-screen">

        <CartProvider>
        <Navbar></Navbar>
        <Layaut>
        
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/productos" element={<Products></Products>}></Route>
            <Route path="/productos/:productId" element={<ProductView></ProductView>}></Route>
            <Route path="/contacto" element={<Contact></Contact>}></Route>
            <Route path="/nosotros" element={<About></About>}></Route>   
            <Route path="/admin" element={<ProductAdmin></ProductAdmin>}></Route>
            <Route path="/ingresar" element={<SignIn></SignIn>}></Route>
            <Route path="/registro" element={<SignUp></SignUp>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            <Route path="/mis-pedidos" element={<Checkout></Checkout>}></Route>
            <Route path="/olvide-contrasena" element={<ForgotPassword></ForgotPassword>}/>

          </Routes>
        
        </Layaut>
        <Footer></Footer>
        </CartProvider>

      </div>
    </>
  )
}

export default App
