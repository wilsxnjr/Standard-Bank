import React from "react";
import right from "../assets/Right-chevron.svg";
import usd from "../assets/USD.svg";
import eur from "../assets/EUR.svg";
import zar from "../assets/ZAR.svg";
import gbp from "../assets/GBP.svg";
import close from "../assets/close.svg";

const Cambio = () => {
  const lista = [
    {
      id: 0,
      img: usd,
      moeda: "MZN / USD",
      compra: "63.45",
      venda: "64.52",
      data: close,
    },
    {
      id: 1,
      img: eur,
      moeda: "MZN / EUR",
      compra: "63.45",
      venda: "64.52",
      data: close,
    },
    {
      id: 2,
      img: zar,
      moeda: "MZN / ZAR",
      compra: "63.45",
      venda: "64.52",
      data: close,
    },
    {
      id: 3,
      img: gbp,
      moeda: "MZN / GBP",
      compra: "63.45",
      venda: "64.52",
      data: close,
    },
  ];

  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundImage: "linear-gradient(to right, #0039AC, #056BF0)",
      }}
    >
      <div className="max-w-[1200px] px-4 m-auto h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center mb-16">
          <h2 className="text-white font-medium text-[40px] md:text-4xl max-w-[15ch] leading-12">
            Câmbios Indicativos
          </h2>
          <a
            className="text-white flex items-center gap-1 justify-self-start md:justify-self-end"
            href="#"
          >
            Ver mais taxas de forex
            <img src={right} alt="" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {lista.map(({ id, img, moeda, compra, venda, data }) => (
            <div key={id} className="bg-white p-8 rounded grid gap-4 justify-center">
              <div className="grid justify-items-center gap-2">
                <img src={img} alt="" />
                <p className="text-[#4B5166] text-sm font-medium">{moeda}</p>
              </div>
              <div className="flex justify-self-center gap-4">
                <div className="grid gap-2">
                  <span className="justify-self-center text-[#4B5166] text-sm font-medium">Compra</span>
                  <span className="text-[#39405C] justify-self-center">{compra}</span>
                </div>
                <div className="grid gap-2">
                  <span className="justify-self-center text-[#4B5166] text-sm font-medium">Venda</span>
                  <span className="text-[#39405C] justify-self-center">{venda}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-self-center">
                <img src={close} alt="" />
                <p className="text-[#4B5166] text-sm">29/06/2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cambio;
