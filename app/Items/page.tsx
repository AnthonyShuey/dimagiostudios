import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  size: string;
}

const items: Item[] = [
  {
    id: 1,
    name: "Starwars Poster: Darth Vader v.s. The Mandalorian",
    imageUrl: "/starwars2.jpg",
    price: 29.99,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 2,
    name: "Starwars Poster: Darth Vader v.s. General Grievous",
    imageUrl: "/starwars1.jpg",
    price: 29.99,
    quantity: 4,
    size: "8x10 inches"
  },
  {
    id: 3,
    name: "Wolf picture",
    imageUrl: "/wolf.jpg",
    price: 40.00,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 4,
    name: "Lion picture",
    imageUrl: "/lion.jpg",
    price: 40.00,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 5,
    name: "Wolf2 picture",
    imageUrl: "/wolf2.jpg",
    price: 40.00,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 6,
    name: "Austrian Alps picture",
    imageUrl: "/AustrianAlps.jpg",
    price: 25.99,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 7,
    name: "Lion2 picture",
    imageUrl: "/lion2.jpg",
    price: 32.99,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 8,
    name: "Parrot picture",
    imageUrl: "/parot1.jpg",
    price: 34.99,
    quantity: 2,
    size: "8x10 inches"
  },
  {
    id: 9,
    name: "AustrianAlps1 picture",
    imageUrl: "/AustrianAlps1.jpg",
    price: 40.00,
    quantity: 2,
    size: "8x10 inches"
  }
];

const Items: React.FC = () => {
  return (
    <div className="container mx-auto px-4 bg-white min-h-screen">
      <nav className="bg-white p-4 flex justify-center space-x-4">
        <Link href="/" className="text-black hover:text-blue-500">Home</Link>
        <Link href="/projects" className="text-black hover:text-blue-500">Projects</Link>
        <Link href="/items" className="text-black hover:text-blue-500">Items for Sale</Link>
      </nav>
      <h1 className="text-2xl font-bold text-center my-6">Items for Sale</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {items.map((item) => (
          <div key={item.id} className="text-center">
            <h3 className="text-lg font-bold">{item.name}</h3>
            <Image src={item.imageUrl} alt={item.name} width={320} height={320} className="mx-auto"/>
            <p className="text-gray-700">${item.price.toFixed(2)}</p>
            <p className="text-gray-500">Size: {item.size}</p>
            <p className="text-gray-500">Quantity in stock: {item.quantity}</p>
            <Link href={`/purchase/${item.id}`} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Purchase</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;

