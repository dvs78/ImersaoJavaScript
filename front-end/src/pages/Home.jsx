import axios from "axios";
import Produto from "../components/Produto";

export const Home = () => {
  const requisicaoAxios = async () => {
    // const respostaRequisicao = await axios.get("http://localhost:3000/produto");
    // console.log(respostaRequisicao.data);
    const { data } = await axios.get("http://localhost:3000/produto");
    console.log(data);
  };
  requisicaoAxios();
  return (
    <section className="secao-produto">
      <div className="container">
        <h1>Todos os produtos</h1>

        <div className="produtos">
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </div>
      </div>
    </section>
  );
};
