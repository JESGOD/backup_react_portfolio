import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./estilos/skills.css";

/* framer motion  */
import { motion } from "framer-motion";
/* framer motion  */
// import required modules
import { EffectCards } from "swiper";

import { Card } from "./Card";

/* variables frame motion */
const container = {
  hidden: { opacity: 0, x: 100 },
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
/* variables frame motion */

export function Skills() {
  return (
    <>
      <section className="  overflow-hidden  py-16">
        <div className="textto-skills text-center text-white">
          <h1 className="font-Audiowide text-2xl">HABILIDADES</h1>
        </div>
        <motion.div
          className=" w-full sm-flex-center flex  flex-col  "
          variants={container}
          initial="hidden"
          /* animate="visible" */
          whileInView="visible"
        >
          <div className="container-skills sm-flex-center flex-row-reverse pattern bg-secundario  w-5/6 p-8 my-10 rounded-3xl">
            <div className="sm:w-2/4 text-center text-white sm:mb-0 mb-5">
              <p className="font-Unbounded mt-5 font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate nobis error numquam quidem tenetur! Vitae numquam
                cumque quod alias,
              </p>
            </div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card porcentaje={"70%"} texto={"Html"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card porcentaje={"60%"} texto={"Css"} />
              </SwiperSlide>
              <SwiperSlide>
                <Card porcentaje={"50%"} texto={"Java Script"} />
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
}
