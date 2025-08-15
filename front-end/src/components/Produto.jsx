import React from "react";

const Produto = ({
  titulo,
  preco,
  precoDesconto,
  precoParcelado,
  imagens,
  freteGratis,
  full,
}) => {
  const percentualDesconto = Math.floor((1 - precoDesconto / preco) * 100);
  return (
    <section className="secao-produto">
      <div className="container">
        <h1>Todos os produtos</h1>

        <div className="produtos">
          <div className="produto">
            <img
              src={JSON.parse(imagens)[0]}
              alt="Imagem do Produto"
              className="produto__img"
            />

            <p>{titulo}</p>

            <div className="produto__precos">
              <p className="produto__preco-riscado">R$ {preco}</p>

              <div className="produto__desconto">
                <p className="produto__preco">R$ {precoDesconto}</p>
                <p className="verde">{percentualDesconto}% OFF</p>
              </div>

              <p>
                em{" "}
                <span className="verde">12x R$ {precoParcelado} sem juros</span>
              </p>
            </div>

            {full ? (
              <div className="produto__full verde">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="produto__icone"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>

                <p className="bold">FULL</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produto;
