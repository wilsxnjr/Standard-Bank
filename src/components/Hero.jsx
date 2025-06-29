import React from "react";
import fundo from "../assets/fundo.png";

const Hero = () => {
  return (
    <main
      className="h-[calc(100vh-75px)] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${fundo})`,
      }}
    >
      <div className="max-w-[1200px] px-4 m-auto h-full flex items-center">
        <div className="grid gap-6">
          <h1 className="text-white font-medium text-[40px] md:text-5xl max-w-[15ch] leading-12">
            Banco pessoal simplificado
          </h1>
          <p className="text-white text-base md:text-lg max-w-[28ch] md:max-w-[38ch]">
            Escolha os produtos certos da nossa gama completa de soluções
            bancárias pessoais, para atender às suas necessidades financeiras.
          </p>
          <a
            className="bg-[#0567F0] text-white py-3 px-5 md:py-3 md:px-6 justify-self-start rounded font-medium"
            href="#"
          >
            Quero saber mais
          </a>
          <div className="flex gap-2">
            <button className="bg-[#0567F0] w-[40px] md:w-[60px] h-[4px] rounded-[4px]"></button>
            <button className="bg-white w-[40px] md:w-[60px] h-[4px] rounded-[4px]"></button>
            <button className="bg-white w-[40px] md:w-[60px] h-[4px] rounded-[4px]"></button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
