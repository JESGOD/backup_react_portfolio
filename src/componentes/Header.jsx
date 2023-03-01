import { useEffect } from "react";
import Typed from "typed.js";

/* framer motion  */
import { motion } from "framer-motion";
/* framer motion  */

/* js para efecto de escribir */
/* const typed = new Typed(".typed", {
  strings: [
    "",
    '</br><i style="color:#00C4F0;font-style:normal">Esteban Samboni Muñoz</i>',
    '</br><i style="color:orange;font-style:normal">Desarrollador Web Front End</i>',
  ],
  
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: false, // Mostrar cursor palpitanto
  cursorChar: "|", // Caracter para el cursor
  contentType: "html", // 'html' o 'null' para texto sin formato
});  */
/* fin js para efecto de escribir */

export function Header() {
  /* useEffect(()=>{
  
  const typed = new Typed(".typed", {
   
    strings: [
      "",
      '</br><i style="color:#00C4F0;font-style:normal">Esteban Samboni Muñoz</i>',
      '</br><i style="color:orange;font-style:normal">Desarrollador Web Front End</i>',
    ],
    
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: false, // Mostrar cursor palpitanto
    cursorChar: "|", // Caracter para el cursor
    contentType: "html", // 'html' o 'null' para texto sin formato
  });
},[])
   */

  /* constantes framer motion animacion imagenes */
  const container = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        stiffness: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  /* fin constantes framer motion animacion imagenes */

  return (
    <>
      <header className=" pb-36 pt-20">
        <section className="container  mx-auto sm:flex px-5 ">
          {/* animacion textto y boton header con frame mtion*/}
          <motion.div
            className="texto-header text-center sm:text-start flex flex-col justify-center items-center sm:items-start w-full  md:w-2/4  "
            variants={container}
            initial="hidden"
            /* animate="visible" */
            whileInView="visible"
          >
            <h1 className="font-Unbounded text-parrafos font-light">
              <span className="text-2xl md:text-4xl font-Audiowide font-bold">
                Hola soy
              </span>
              <span
                className="typed text-4xl md:text-6xl font-Audiowide font-extrabold"
                id="a"
              >
                <br />
              </span>
              <br />
              Me encanta la programación web y he dedicado tiempo a aprender
              diferentes tecnologías como HTML, CSS y JavaScript, así como
              frameworks tales como React.
            </h1>

            <button type="button" class="btns font-Unbounded font-semibold">
              CONTACT ME
            </button>
          </motion.div>
          {/* fin animacion textto y boton header con frame mtion*/}
          {/* animacion imagen y circulo header con frame motion */}
          <div className="img-header w-full  md:w-2/4 relative ">
            <motion.div
              className=" "
              variants={container}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img
                variants={item}
                src="./recursos/perfil.svg"
                alt=""
                className="mx-auto w-full h-full z-10 relative "
              />

              <figure
                variants={item}
                className="circulo rounded-full border-[20px] absolute top-2/4 transform -translate-x-2/4 -translate-y-2/4 left-2/4  border-blueCircle shadow-shadowCirculo  w-64 h-64"
              />
            </motion.div>

            {/* fin animacion imagen y circulo header con frame motion */}
          </div>
        </section>
      </header>
    </>
  );
}
