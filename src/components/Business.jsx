import React from "react";
import fundo from "../assets/homem.png";

const Business = () => {
  return (
    <section
      className="h-[calc(100vh-120px)] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${fundo})`,
      }}
    >
      <div className="max-w-[1200px] px-4 m-auto h-full flex items-center">
        <div className="grid gap-6">
          <h2 className="text-white font-medium text-[40px] md:text-5xl max-w-[15ch] leading-12">
            Você dirige um negócio?
          </h2>
          <p className="text-white text-base md:text-lg max-w-[28ch] md:max-w-[38ch]">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você.
          </p>
          <a
            className="bg-[#0567F0] text-white py-3 px-5 md:py-3 md:px-6 justify-self-start rounded font-medium"
            href="#"
          >
            Quero saber mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Business;
