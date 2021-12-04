import React from 'react';
import { DataTable } from 'Components/DataTable/DataTable';
import { Footer } from 'Components/Footer/Footer';
import { NavBar } from 'Components/NavBar';
import { BarChart } from 'Components/BarChart/BarChart';
import { DonutChart } from 'Components/DonutChart/DonutChart';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as vendas</h5>
            <DonutChart />
          </div>
          <div className="py-3">
            <h2 className="text-primary">Todas as Vendas</h2>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}
export default App;
