
import { useNavigate } from 'react-router-dom';
import TecladoImage from '../assets/tecladoimage.png';
import { useForm } from '../hook/useForm';
import { Link } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()

    const {name, lastname, email, password, repeatpassword, onInputChange, onResetForm} = useForm({
        name: '',
        lastname: '',
        email: '',
        password: '',
        repeatpassword: '',
    })

    const onRegister = (e) => {
        e.preventDefault()

        const Users = JSON.parse(localStorage.getItem('Users')) || []
        const isUserRegistered = Users.find(user => user.email === email)
        if(isUserRegistered){
            return alert('El usuario ya esta registrado')
        }

        Users.push({name: name, lastname: lastname, email: email, password: password, repeatpassword: repeatpassword})
        localStorage.setItem('Users', JSON.stringify(Users))
        alert('Usuario registro con exito!')
        

        navigate('/ingresar', {
            replace: true,
            state: {
                logged: true,
                name,
            }})

            onResetForm()
            
        }

    return (

        <section className="relative min-h-[100vh] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <img src={TecladoImage} alt={TecladoImage} className="min-h-screen min-w-full"/>
            </div>
        <div className="container relative flex items-center justify-center min-h-[100vh] pb-20 md:left-1/3">
            <form className="max-w-md border-slate-900 mt-14 " onSubmit={onRegister}>

                <h2 className=" text-gray-100 text-center text-2xl font-extrabold mb-12 border-b-blue-500 border-b-4 mx-16">REGISTRATE</h2>

                <div className="relative flex items-center mt-8 ">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
    
                    <input type="text" name='name' id='name' value={name} onChange={onInputChange} className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" fill placeholder="Nombre" required autoComplete="off"/>
                </div>

                <div className="relative flex items-center mt-6 ">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>

                    <input type="text" name='lastname' id='lastname' value={lastname} onChange={onInputChange} className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" fill placeholder="Apellidos" required autoComplete="off"/>
                </div>
    
                <div className="relative flex items-center mt-6 ">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
    
                    <input type="email" name='email' id='email' value={email} onChange={onInputChange} className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Correo electronico" required autoComplete="off"/>
                </div>
    
                <div className="relative flex items-center mt-6  ">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input type="password" name='password' id='password' value={password} onChange={onInputChange} className="block w-full px-10 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Contraseña"  required autoComplete="off"/>
                </div>
    
                <div className="relative flex items-center mt-6 ">
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </span>
    
                    <input type="password" name='repeatpassword' id='repeatpassword' value={repeatpassword} onChange={onInputChange} className="block w-full px-10 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Repetir contraseña"  required autoComplete="off"/>
                </div>

                <div className="text-white flex gap-1 mt-6 justify-center">
                    <label><input type="checkbox" required/> Acepto los</label>
                    <a href="#" className="font-bold hover:underline">Terminos y condiciones</a>
                </div>
    
                <div className="mt-6 ">
                    <button type="submit" className="w-full py-2 text-1x2 font-bold tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Registrarse
                    </button>
                </div>

                <div className="text-white flex justify-center gap-4 mt-4">
                    <p>Tienes cuenta?</p>
                    <p className="font-bold"><Link to="/ingresar">Iniciar sesion</Link></p>
                </div>

            </form>
        </div>
    </section>
    );
  
}

export default SignUp;