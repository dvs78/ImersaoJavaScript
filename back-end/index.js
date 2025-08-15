import express from "express";

// Colocar todas as funções do express na variável app
const app = express();

// Middleware: toda requisição com res.json, transforma e json, ou seja,todo body que chegar transforma em json
app.use(express.json());

// Criando requisição get = endpoint com barra, só tem resposta
app.get("/", (req, res) => {
  res.send("Olá, Galo!");
});

// Criando requisição get = endpoint com barra, tem requisição (body) e resposta (params)
app.post("/", (req, res) => {
  // Desestruturação, pega chave dentro do objeto
  // objeto = req
  // chave = body
  // const body = req.body;
  const { body } = req;

  // objeto = body
  // chave = nome e imersao
  const { nome, imersao } = body;

  // console.log(body.nome);
  // res.send("Informação nova criada com sucesso!");
  res.json({ nome, imersao });
});

// Parâmetros da requisição
app.post("/produto/:id", (req, res) => {
  const { body } = req;
  const { nome, imersao } = body;

  // const id = req.params.id;
  const { id } = req.params;
  console.log(id);

  res.json({ nome, imersao });
});

// Colocar o app para rodar, ou seja, receber pedidos ou enviar respostas
app.listen(3000, () =>
  console.log("Meu servidor está rodando na porta http://localhost:3000")
);
