import express from "express";

// Colocar todas as funções do express na variável app
const app = express();

// Criando requisição get = endpoint com barra, só tem resposta
app.get("/", (req, res) => {
  res.send("Olá, Galo!");
});

// Criando requisição get = endpoint com barra, tem requisição (body) e resposta (params)
app.post("/", (req, res) => {
  const body = req.body;
  console.log(body.nome);
  res.send("Informação nova criada com sucesso!");
});

// Colocar o app para rodar, ou seja, receber pedidos ou enviar respostas
app.listen(3000, () =>
  console.log("Meu servidor está rodando na porta http://localhost:3000")
);
