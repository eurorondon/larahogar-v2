"use client";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../utils/colors";

const Portada = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 576);
  }, []);

  if (isMobile) {
    return (
      <div
        className="py-4 m-3  rounded-lg"
        style={{ backgroundColor: Colors.Ccuarto }}
      >
        <div className="container mx-auto">
          <div className="flex px-3">
            <div className="w-full sm:w-1/2 flex justify-center items-center">
              <div className="text-white">
                <div className="text-left">
                  <h1 className="mb-4 font-bold text-lg md:text-xl">
                    Todo lo que necesitas
                  </h1>
                </div>
                <h5 className="text-sm md:text-base">
                  Los mejores artículos del hogar en tu tienda favorita
                </h5>
                {/* <button className="btn btn-dark mt-3">Comprar Ahora</button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="flex justify-center items-center">
                <img src="/images/portada.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-3 bg-white">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col-reverse md:flex-row items-center w-full md:w-3/4">
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h2 className="font-bold">Todo lo que necesitas</h2>
                <h4 className="text-sm md:text-base">
                  Los mejores artículos del hogar en tu tienda favorita
                </h4>
                {/* <button className="btn btn-dark mt-3">Comprar Ahora</button> */}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex justify-start items-center">
                <img src="/images/portada.png" className="max-w-xs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portada;
