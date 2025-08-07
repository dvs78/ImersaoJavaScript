import React from "react";
import Produto from "../components/Produto";

export const Home = () => {
  return (
    <section class="secao-produto">
      <div class="container">
        <h1>Todos os produtos</h1>

        <div class="produtos">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </div>
    </section>
  );
};
