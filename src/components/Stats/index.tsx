import React, { FC } from "react";

interface RestaurantStatsProps {
  stock: { [key: string]: number };
}

const RestaurantStats: FC<RestaurantStatsProps> = ({ stock }) => {
  const peixePrice = 10.99;
  const baiãoPrice = 12.99;
  const batataPrice = 12.99;

  const peixeRevenueDefault = peixePrice * 10;
  const baiãoRevenueDefault = baiãoPrice * 15;
  const batataRevenueDefault = batataPrice * 5;

  const totalStockDefault = 30;

  const totalRevenueDefault =
    peixeRevenueDefault + baiãoRevenueDefault + batataRevenueDefault;

  const currentTotalStock = stock.Peixe + stock.Baião + stock.Batata;

  const currentTotalRevenue =
    peixePrice * stock.Peixe +
    baiãoPrice * stock.Baião +
    batataPrice * stock.Batata;

  const profit = totalRevenueDefault - currentTotalRevenue;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Gestão</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total de Receita</h3>
          <p className="text-xl">R${totalRevenueDefault}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total de Estoque</h3>
          <p className="text-xl">{totalStockDefault}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total de Estoque Atual</h3>
          <p className="text-xl">{currentTotalStock}</p>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-2">Vendas</h3>
          <p className="text-xl">R${profit}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantStats;
