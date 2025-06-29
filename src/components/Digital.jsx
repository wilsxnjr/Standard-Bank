import React from "react";
import right from "../assets/Right-chevron.svg";
import quiq from "../assets/Quiq.svg";
import atm from "../assets/ATM.svg";
import net from "../assets/NetPlus.svg";
import bol from "../assets/Bol.svg";

const Digital = () => {
  const digital = [
    {id: 1, description: "Bol", icon: bol},
    {id: 1, description: "Net Plus", icon: net},
    {id: 1, description: "QuiQ", icon: quiq},
    {id: 1, description: "Grandes Depósitos", icon: atm},
  ]
  return (
    <section className="bg-[#F5F7FA] md:py-24 ">
      <div
        className="max-w-[1200px] m-auto py-14 px-8 md:px-16 md:rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{
          backgroundImage: "linear-gradient(to right, #0039AC, #056BF0)",
        }}
      >
        <div className="grid gap-4">
          <h2 className="text-white text-3xl font-medium leading-tight">
            Digitalize a sua vida
          </h2>
          <p className="text-white max-w-[37ch]">
            Conecte-se à modernidade com nossas soluções digitais - simplicidade
            e eficiência na ponta dos seus dedos.
          </p>
          <a className="text-white flex items-center gap-1" href="#">Saber mais <img src={right} alt="" /></a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {digital.map(({id, description, icon}) => (
            <div className="grid grid-cols-[auto_1fr] md:grid-cols-1 items-center justify-center gap-2 bg-[#D1DBE0] p-4 rounded-[8px]" key={id}>
              <img className="justify-self-center" src={icon} alt="" />
              <p className="text-[#39405C] md:justify-self-center">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Digital;
