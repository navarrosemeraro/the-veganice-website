export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  imagem: string;
  categoriaNome: string;
  categoriaSlug: string;
  link: string;
}

export const bolos: Produto[] = [
  {
    id: "red-velvet",
    nome: "Red Velvet Afetivo",
    descricao: "Massa aveludada com recheio cremoso e toque de baunilha natural.",
    imagem: "/doces/bolos/redvelvet.jpg",
    categoriaNome: "Festas",
    categoriaSlug: "festas",
    link: "https://wa.me/5521999999999?text=Quero%20o%20Red%20Velvet"
  },
  {
    id: "cenoura-brigadeiro",
    nome: "Bolo de Cenoura com Brigadeiro",
    descricao: "Massa fofinha com generosa camada de brigadeiro 100% vegetal.",
    imagem: "/doces/bolos/cenoura.jpg",
    categoriaNome: "Caseirinhos",
    categoriaSlug: "caseirinhos",
    link: "https://wa.me/5521999999999?text=Quero%20o%20Bolo%20de%20Cenoura"
  },
  {
    id: "floresta-negra",
    nome: "Bolo Floresta Negra",
    descricao: "Massa intensa de chocolate com recheio de cerejas e chantilly leve.",
    imagem: "/doces/bolos/florestanegra.jpg",
    categoriaNome: "Festas",
    categoriaSlug: "festas",
    link: "https://wa.me/5521999999999?text=Quero%20o%20Floresta%20Negra"
  },
  {
    id: "fuba-goiabada",
    nome: "Bolo de Fubá com Goiabada",
    descricao: "Receita clássica de vó com pedaços macios de goiabada artesanal.",
    imagem: "/doces/bolos/fuba.jpg",
    categoriaNome: "Caseirinhos",
    categoriaSlug: "caseirinhos",
    link: "https://wa.me/5521999999999?text=Quero%20o%20Bolo%20de%20Fubá"
  },
  {
    id: "sazonal-pascoa",
    nome: "Especial de Páscoa / Natal",
    descricao: "Edição limitada produzida exclusivamente em épocas comemorativas.",
    imagem: "/doces/bolos/sazonal.jpg",
    categoriaNome: "Sazonal",
    categoriaSlug: "sazonais",
    link: "https://wa.me/5521999999999?text=Quero%20o%20Bolo%20Sazonal"
  }
];