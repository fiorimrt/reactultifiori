// src/firebase/seed.js

import { db } from "./firebaseConfig.js";

import { collection, addDoc } from "firebase/firestore";

const productos = [
    {
        nombre: "Taos",
        precio: 30000,
        img: "https://res.cloudinary.com/ddrxjetdn/image/upload/v1744491116/taos_gzewq5.jpg",
        stock: 10,
        oferta: true,
        descripcion: "Camioneta",
        categoria: "suvs"
    },
    {
        nombre: "Golf",
        precio: 25000,
        img: "https://res.cloudinary.com/ddrxjetdn/image/upload/v1744491703/golf1_i5jtsd.avif",
        stock: 15,
        oferta: false,
        descripcion: "Vehículo",
        categoria: "hatchback"
    },
    {
        nombre: "Virtus",
        precio: 20000,
        img: "https://res.cloudinary.com/ddrxjetdn/image/upload/v1744491138/virtus_ppg0fm.webp",
        stock: 0,
        oferta: false,
        descripcion: "Sedan",
        categoria: "sedanes"
    },
    {
        nombre: "Vento",
        precio: 45000,
        img: "https://res.cloudinary.com/ddrxjetdn/image/upload/v1744491126/vento_k3kyhk.jpg",
        stock: 2,
        oferta: true,
        descripcion: "Sedan",
        categoria: "sedanes"
    },
    {
        nombre: "Polo",
        precio: 15000,
        img: "https://res.cloudinary.com/ddrxjetdn/image/upload/v1744491151/polo_fo68nr.png",
        stock: 2,
        oferta: true,
        descripcion: "Hatchback",
        categoria: "hatchback"
    }
];

const cargarProductos = async () => {
    const productosRef = collection(db, "productos");

    for (let producto of productos) {
        await addDoc(productosRef, producto);
    }

    console.log("Productos cargados");
};

cargarProductos();
