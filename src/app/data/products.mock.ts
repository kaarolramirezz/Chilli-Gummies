import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ositos de Goma Enchilados',
    description: 'Nuestros icónicos ositos de goma cubiertos con una deliciosa y crujiente mezcla de chile en polvo de la casa y un toque cítrico. ¡El equilibrio perfecto entre dulce y picante!',
    price: 65,
    image: 'gummy-bears-chili.png',
    category: 'Ositos',
    weight: '150g',
    inStock: true
  },
  {
    id: '2',
    name: 'Gusanitos Ácidos con Tajín',
    description: 'Clásicos gusanitos de goma con un nivel de acidez extremo, revolcados en una generosa capa de Tajín y chamoy artesanal. Una explosión que te hará fruncir el ceño.',
    price: 70,
    image: 'sour-worms-chili.png',
    category: 'Gusanitos',
    weight: '150g',
    inStock: true
  },
  {
    id: '3',
    name: 'Aros de Durazno Enchilosos',
    description: 'Aros de goma con sabor a durazno maduro, cubiertos de azúcar y un toque sutil de chile piquín y chamoy líquido concentrado. Textura suave con un picor irresistible.',
    price: 68,
    image: 'peach-rings-chili.png',
    category: 'Aros',
    weight: '200g',
    inStock: true
  },
  {
    id: '4',
    name: 'Mango Bites con Chamoy',
    description: 'Exquisitos bocados con sabor a mango natural, rellenos de una dosis de chamoy líquido y espolvoreados con chile de árbol seco. La combinación más tradicional mexicana.',
    price: 75,
    image: 'mango-bites-chili.png',
    category: 'Mangitos',
    weight: '180g',
    inStock: true
  },
  {
    id: '5',
    name: 'Tiras de Fresa Enchilosos',
    description: 'Tiernas gomitas en forma de corazón con sabor intenso a fresa silvestre, cubiertas de una capa extra picante de chile de árbol y cayena. ¡Un amor picante!',
    price: 65,
    image: 'hearts-chili.png',
    category: 'Tiras',
    weight: '150g',
    inStock: true
  },
  {
    id: '6',
    name: 'Mega Bolsa Mix Especial',
    description: 'Una mega bolsa que contiene todo nuestro catálogo clásico de gomitas: ositos, gusanitos, aros y mango bites, bañados en nuestro chamoy secreto y chile especial.',
    price: 150,
    image: 'mix-bag-chili.png',
    category: 'Mix',
    weight: '450g',
    inStock: true
  }
];
