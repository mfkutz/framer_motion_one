import Header from "./components/Header"
import Main from "./components/Main";
import { motion } from "framer-motion"

const App = () => {
  return (
    <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
      <div className="lg:col-span-4 h-screen relative">
        <img
          src="https://img.freepik.com/foto-gratis/retrato-cuerpo-entero-mujer-complacida-ropa-
        casual-sentada-suelo-apuntando-dedo-indice-amplia-sonrisa-aislado-sobre-
        pared-blanca_171337-1204.jpg?w=740&t=st=1695379669~exp=1695380269~hmac=000d7fadfc9556ef5071ff8b4361d4108aed4aa4722b9bf9637e587d9c59da18"
          alt=""
          className="h-full object-cover grayscale"
        />
        <span className="absolute w-40 h-40 bg-pink-400/80 rounded-full -top-20 -left-20"></span>
      </div>

      <div className="lg:col-span-8  relative overflow-hidden">
        <Header />
        <Main />

        <motion.span
          className="absolute w-40 h-40 bg-pink-400/80 rounded-full -bottom-30 -right-10"

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, y: 0 }
          }}


        ></motion.span>
        <span className="absolute w-80 h-80 bg-pink-400/80 rounded-full top-40 -right-72 shadow-2xl shadow-pink-500"></span>
      </div>
    </div>
  )
}

export default App