const products = [
  {
    name: 'Air Jordan 1 Retro High',
    image: '/images/AirJordan.jpg',
    description:
      'Release Date February 23, 2018 Item Code 555088-610 Color GYM RED/BLACK/SUMMIT WHITE Size Report True to size: 87.9% Runs large: 6.6% Runs small: 5.5% No. of review: 1152 Made In China Style Trendy, Street Style Upper Material Synthetic Leather Functionality Slip-resistant Sole Material Rubber Sole Upper High Cut Toe Type Round Toe Heel type Flat heel Colorway Red/White/Black Firstly arrived in 1985, Air Jordan 1 has been around for over 3 decades. The Jordan line keeps revamping the OG silhouettes with fresh colours and premium materials, and has also collaborated with different artists, designers and retailers to capture the essence of the original through a modern lens.',
    brand: 'Nike',
    category: 'Footwear',
    price: 89.99,
    countInStock: 10,
    sizes: [30, 35, 40],
    rating: 4.5,
    numReviews: 12,
    colorWay: ['Red', 'Green', 'Blue'],
  },
  {
    name: 'Adidas Red Tshirt',

    image: '/images/AdidasTshirt.jpg',
    description:
      'One, two, three. Its that easy. 3-Stripes in contrast colours tell the world you are rolling with a community of rebels and rule-breakers. Show them off on this t-shirt and keep your adidas style authentic. Soft cotton feels cosy from the first wear to the millionth.',
    brand: 'Adidas',
    category: 'Clothing',
    price: 599.99,
    countInStock: 7,
    sizes: [30, 35, 40],
    rating: 4.0,
    numReviews: 8,
    colorWay: ['Red', 'Green', 'Blue'],
  },
  {
    name: 'Nike Sneakers',

    image: '/images/Nike.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Nike',
    category: 'Footwear',
    price: 929.99,
    countInStock: 5,
    sizes: [30, 35, 40],
    rating: 3,
    numReviews: 12,
    colorWay: ['Red', 'Green', 'Blue'],
  },
  {
    name: 'Vans Of The Wall',

    image: '/images/VansOfTheWall.jpg',
    description:
      'Vans Red T-Shirt Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Vans Of The Wall',
    category: 'Clothing',
    price: 399.99,
    countInStock: 11,
    sizes: [30, 35, 40],
    rating: 5,
    numReviews: 12,
    colorWay: ['Red', 'Green', 'Blue'],
  },
  {
    name: 'Adidas ZX 500 Jordan',

    image: '/images/AdidasZX500Jordan.jpg',
    description:
      'Adidas ZX 500 Jordan Closeup Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Adidas',
    category: 'Footwear',
    price: 49.99,
    countInStock: 7,
    sizes: [30, 35, 40],
    colorWay: ['Red', 'Green', 'Blue'],

    rating: 3.5,
    numReviews: 10,
  },
  {
    name: 'SuperStar',

    image: '/images/SuperStar.jpg',
    description:
      'Adidas SuperStar Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Adidas',
    category: 'Footwear',
    price: 29.99,
    countInStock: 0,
    sizes: [30, 35, 40],
    colorWay: ['Red', 'Green', 'Blue'],

    rating: 4,
    numReviews: 12,
  },
  {
    name: 'NikeAir',

    image: '/images/Jordan.jpg',
    description:
      'NikeJordan Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Nike',
    category: 'Footwear',
    price: 29.99,
    countInStock: 3,
    sizes: [30, 35, 40],
    colorWay: ['Red', 'Green', 'Blue'],

    rating: 4,
    numReviews: 12,
  },
  {
    name: 'Nike Collectors Edition',

    image: '/images/NikeColl.jpg',
    description:
      'Collection Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    brand: 'Nike',
    category: 'Footwear',
    price: 29.99,
    countInStock: 4,
    sizes: [30, 35, 40],
    colorWay: ['Red', 'Green', 'Blue'],

    rating: 4,
    numReviews: 12,
  },
];

export default products;
