export interface ItemDelivery {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  categoriaNome: string;
  categoriaSlug: string;
  preco: string;
  linkPedido: string;
}

export const produtosAutorais: ItemDelivery[] = [
  {
    id: "bolo-na-cumbuca",
    nome: "Bolo na Cumbuca",
    descricao: "Camadas generosas de bolo fofinho intercaladas com recheio artesanal cremoso.",
    imagem: "/doces/delivery/BolosNaCumbuca.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 18,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "brigadeiro-de-colher",
    nome: "Brigadeiro de Colher",
    descricao: "Brigadeiro 100% vegetal ultra cremoso, perfeito para comer de colher.",
    imagem: "/doces/delivery/BrigadeiroDeColher.JPG",
    categoriaNome: "Doces de Colher",
    categoriaSlug: "colher",
    preco: "R$ 14,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "churros-edicao-especial",
    nome: "Churros (Edição Especial)",
    descricao: "Churros estaladiços servidos acompanhados de doce de leite vegetal cremoso.",
    imagem: "/doces/delivery/Churros-EdiçãoEspecial.JPG",
    categoriaNome: "Especiais",
    categoriaSlug: "especiais",
    preco: "R$ 20,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "cookie",
    nome: "Cookie Artesanal",
    descricao: "Cookie crocante por fora e macio por dentro, com generosas gotas de chocolate.",
    imagem: "/doces/delivery/Cookie.jpg",
    categoriaNome: "Cookies & Biscoitos",
    categoriaSlug: "cookies",
    preco: "R$ 10,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "doce-de-leite-de-colher",
    nome: "Doce de Leite de Colher",
    descricao: "Doce de leite vegetal artesanal, aveludado e com sabor marcante.",
    imagem: "/doces/delivery/DoceDeLeiteDeColher.JPG",
    categoriaNome: "Doces de Colher",
    categoriaSlug: "colher",
    preco: "R$ 14,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "caixa-docinhos-encomenda",
    nome: "Caixa de Docinhos Sortidos",
    descricao: "Seleção de docinhos artesanais em forminhas, ideal para festas e eventos.",
    imagem: "/doces/delivery/IMG_9330.JPG",
    categoriaNome: "Kits & Encomendas",
    categoriaSlug: "encomendas",
    preco: "R$ 45,00",
    linkPedido: "https://wa.me/552121478421?text=Olá!%20Gostaria%20de%20encomendar%20uma%20caixa%20de%20docinhos"
  },
  {
    id: "mini-brownies-encomenda",
    nome: "Caixa de Mini Brownies",
    descricao: "Quadradinhos de brownie de chocolate intenso em caixa especial para presente.",
    imagem: "/doces/delivery/MiniBrowniesEncomenda.JPG",
    categoriaNome: "Kits & Encomendas",
    categoriaSlug: "encomendas",
    preco: "R$ 38,00",
    linkPedido: "https://wa.me/552121478421?text=Olá!%20Gostaria%20de%20encomendar%20mini%20brownies"
  },
  {
    id: "mini-cookies-encomenda",
    nome: "Caixa de Mini Cookies",
    descricao: "Porção de mini cookies artesanais crocantes, perfeitos para partilhar.",
    imagem: "/doces/delivery/MiniCookiesEncomenda.JPG",
    categoriaNome: "Kits & Encomendas",
    categoriaSlug: "encomendas",
    preco: "R$ 32,00",
    linkPedido: "https://wa.me/552121478421?text=Olá!%20Gostaria%20de%20encomendar%20mini%20cookies"
  },
  {
    id: "palha-italiana",
    nome: "Palha Italiana",
    descricao: "Combinação clássica de brigadeiro cremoso com pedaços crocantes de biscoito.",
    imagem: "/doces/delivery/Palhaltaliana.jpg",
    categoriaNome: "Doces Individuais",
    categoriaSlug: "individuais",
    preco: "R$ 12,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "paves",
    nome: "Pavê na Cumbuca",
    descricao: "Sobremesa clássica montada em camadas com creme macio e biscoito artesanal.",
    imagem: "/doces/delivery/Pavês.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 18,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "torta-3-limoes-cumbuca",
    nome: "Torta 3 Limões na Cumbuca",
    descricao: "Torta de limão refrescante com equilíbrio perfeito entre o azedinho e o doce.",
    imagem: "/doces/delivery/Torta3LimõesNaCumbuca.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 18,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "torta-alema-cumbuca",
    nome: "Torta Alemã na Cumbuca",
    descricao: "Camadas intercaladas de creme suave, biscoito e cobertura rica de chocolate.",
    imagem: "/doces/delivery/TortaAlemãNaCumbuca.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 18,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "torta-cookie",
    nome: "Fatia de Torta Cookie",
    descricao: "Fatia generosa de torta feita de cookie recheada com creme de chocolate.",
    imagem: "/doces/delivery/tortaCookie.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 16,00",
    linkPedido: "https://goomer.app/theveganices"
  },
  {
    id: "torta-crocante-cumbuca",
    nome: "Torta Crocante na Cumbuca",
    descricao: "Creme aveludado coberto com praliné crocante de amêndoas/castanhas.",
    imagem: "/doces/delivery/TortaCrocanteNaCumbuca.JPG",
    categoriaNome: "Cumbucas & Sobremesas",
    categoriaSlug: "cumbucas",
    preco: "R$ 18,00",
    linkPedido: "https://goomer.app/theveganices"
  }
];