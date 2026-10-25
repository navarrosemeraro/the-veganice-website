import type { Produto } from './bolos';

export const doces: Produto[] = [
  {
    id: "brigadeiro-cacau",
    nome: "Brigadeiro Tradicional 70%",
    descricao: "Massa aveludada feita com cacau puro e leite vegetal artesanal.",
    imagem: "/doces/brigadeiro.jpg",
    categoriaNome: "Tradicionais",
    categoriaSlug: "tradicionais",
    link: "https://goomer.app/theveganices"
  },
  {
    id: "beijinho-coco",
    nome: "Beijinho de Coco Fresco",
    descricao: "Coco ralado na hora envolto em massa leve e finalizado com cravo.",
    imagem: "/doces/beijinho.jpg",
    categoriaNome: "Tradicionais",
    categoriaSlug: "tradicionais",
    link: "https://goomer.app/theveganices"
  },
  {
    id: "caixa-presente-12",
    nome: "Caixa Presente (12 unidades)",
    descricao: "Seleção sortida dos nossos melhores docinhos para presentear com afeto.",
    imagem: "/doces/caixa-presente.jpg",
    categoriaNome: "Kits & Presentes",
    categoriaSlug: "presentes",
    link: "https://wa.me/5521999999999?text=Quero%20uma%20Caixa%20Presente"
  }
];