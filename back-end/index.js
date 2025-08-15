import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

// Bucando os produtos
app.get("/produto", async (req, res) => {
  const produtos = await prisma.produto.findMany();
  res.json(produtos);
});

// Criando os produtos
app.post("/produto", async (req, res) => {
  const {
    titulo,
    preco,
    precoDesconto,
    precoParcelado,
    caracteristicas,
    imagens,
    estoque,
    freteGratis,
    full,
  } = req.body;

  const novoProduto = await prisma.produto.create({
    data: {
      titulo,
      preco,
      precoDesconto,
      precoParcelado,
      caracteristicas: JSON.stringify(caracteristicas),
      imagens: JSON.stringify(imagens),
      estoque,
      freteGratis,
      full,
    },
  });

  res.json(novoProduto);
});

// Parâmetros da requisição
// app.post("/produto/:id", (req, res) => {
//   const { body } = req;
//   const { nome, imersao } = body;

//   // const id = req.params.id;
//   const { id } = req.params;
//   console.log(id);

//   res.json({ nome, imersao });
// });

// Colocar o app para rodar, ou seja, receber pedidos ou enviar respostas
app.listen(3000, () =>
  console.log("Meu servidor está rodando na porta http://localhost:3000")
);
