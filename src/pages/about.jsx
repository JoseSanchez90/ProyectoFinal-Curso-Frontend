import Image from '../assets/josesanchez.jpg'

const About = () => {

  return (
    
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 pb-24 pt-10 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20 mt-8">
      <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">NUESTRO EQUIPO 💪</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Quiero presentarles nuestro equipo de desarrollo del sitio web, destacando el sistema de autenticación mejorado que permite una navegación fluida entre el inicio de sesión y el registro. Hemos priorizado la usabilidad y la estética, enfocándonos en una experiencia de usuario intuitiva. Agradezco cualquier feedback para seguir optimizando nuestro proyecto.</p>
    </div>
    <div className="flex flex-wrap -m-4 mt-32 mb-28">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Image} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Jose Sanchez</h2>
            <h3 className="text-gray-500 mb-3">Frontend Developer</h3>
            <p className="mb-4">Desarrollador web con 2 años de experiencia en empresas privadas, actualmente trabajando en Pacifico Seguros</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://scontent.flim1-1.fna.fbcdn.net/v/t39.30808-6/428637820_1777906149397191_8141575816951342953_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHi-ZvIUHsqyG11AgXrIbGRv91cCFnGTE2_3VwIWcZMTSo8xlij9PvlETttmfjVsk9ddZlpHZBcFueblxIFuqtV&_nc_ohc=JftL-g0iCEUAX9A9pgK&_nc_ht=scontent.flim1-1.fna&oh=00_AfCgzPx7aws70-hnSaVDqFv8wXUd-DYYS-09XWbl-QRp-w&oe=65E380BB" />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">Juan Ruiz</h2>
            <h3 className="text-gray-500 mb-3">Fullstack Developer</h3>
            <p className="mb-4">Ingeniero de software con 3 años de experiencia en el desarrollo Fullstack, actualmente trabajando en Samsung</p>
            <span className="inline-flex">
              <a className="text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-2 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      
      
    </div>
  </div>
</section>
  )
}

export default About
