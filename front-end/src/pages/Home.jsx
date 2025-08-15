import { useEffect, useState } from "react";
import axios from "axios";
import Produto from "../components/Produto";

export const Home = () => {
  // Variável de estado
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const requisicaoAxios = async () => {
      const { data } = await axios.get("http://localhost:3000/produto");
      setProdutos(data);
    };
    requisicaoAxios();
  }, []);
  if (produtos.length === 0) return <></>;
  return (
    <section className="secao-produto">
      <div className="container">
        <h1>Todos os produtos</h1>

        <div className="produtos">
          {produtos.map((produto) => (
            <Produto {...produto} key={produto.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
