/* let circulo = document.querySelector("#circulo1") */
/* console.log(circulo);  */
/* let porcentaje = document.querySelector(".porcentaje"); */

export function Card({ porcentaje, texto }) {
  let porcentajeIncial = 0,
    porcentajeFinal = 70,
    Velocidad = 100;

  let progreso = setInterval(() => {
    porcentajeIncial++;
    let porcentaje = (document.querySelector(".porcentaje").innerHTML =
      porcentajeIncial + "%");
    let circulo = (document.querySelector(
      "#circulo1"
    ).style.background = `conic-gradient(#E29500 ${
      porcentajeIncial * 3.6
    }deg, #2C2C2C 0deg)`);

    if (porcentajeIncial == porcentajeFinal) {
      clearInterval(progreso);
    }
  }, Velocidad);

  return (
    <>
      <div className="containerPP text-white font-Audiowide card bg-blackNb relative w-60 h-full rounded-lg flex justify-center items-end py-5">
        <figure
          className="circulo  rounded-full w-32 h-32 bg-[conic-gradient(_#E29500_3.6deg,_#2C2C2C_0deg)] absolute center-absolute-items before:content-['hola mundo'] before:absolute before:w-28 before:h-28 before:rounded-full before:bg-blackNb before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:left-2/4 before:top-2/4"
          id="circulo1"
        ></figure>
        <div className="porcentaje absolute center-absolute-items ">
          {porcentaje}
        </div>
        <div className="text-card">{texto}</div>
      </div>
    </>
  );
}
