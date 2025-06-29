import React from "react";
import contas from "../assets/Contas.svg";
import cartao from "../assets/Card.svg";
import car from "../assets/Car.svg";
import home from "../assets/Home.svg";
import wallet from "../assets/Wallet.svg";
import bag from "../assets/Bag.svg";

const Services = () => {
  const services = [
    { id: 1, description: "Contas bancárias", icon: contas },
    { id: 1, description: "Cartões de crédito", icon: cartao },
    { id: 1, description: "Empréstimos para veículos", icon: car },
    { id: 1, description: "Empréstimos para habitação", icon: home },
    { id: 1, description: "Fazer pagamentos", icon: wallet },
    { id: 1, description: "Fazer uma viagem", icon: bag },
  ];
  return (
    <section className="bg-[#EDF0F5]">
      <div className="max-w-[1200px] m-auto py-24 px-4">
        <div className="grid justify-center gap-4">
          <h2 className="text-center text-[#141B2A] text-3xl md:text-4xl font-semibold max-w-[25ch]">
            Serviços bancários adaptados às suas necessidades
          </h2>
          <p className="text-center text-[#39405C]">Como podemos te ajudar?</p>
        </div>
        <div>
          <div className="grid md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 md:gap-8 mt-12">
            {services.map(({ id, description, icon }) => (
              <div
                key={id}
                className="w-full px-6 py-6 md:py-8 bg-white grid-cols-[auto_1fr] grid md:grid-cols-1 gap-4 justify-center items-center border border-[#D1DBE0] rounded hover:shadow-xl transition duration-500"
              >
                <img className="md:justify-self-center w-[24px]" src={icon} alt="" />
                <p className="md:text-center text-[#39405C] font-medium">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
