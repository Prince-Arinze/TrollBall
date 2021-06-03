import img1 from "../assets/bag1.jpeg"
import img2 from "../assets/bag2.jpeg"
import img3 from "../assets/bag3.jpeg"
import img4 from "../assets/gown.jpeg"
import img5 from "../assets/jean.jpeg"
import img6 from "../assets/jean1.jpeg"

import img7 from "../assets/nike-cap.jpeg"
import img8 from "../assets/nike.jpeg"
import img9 from "../assets/polo.jpeg"
import img10 from "../assets/shoe1.jpeg"
import img11 from "../assets/snicker2.jpeg"
import img12 from "../assets/snicker.jpeg"
import img13 from "../assets/sweater.jpeg"

import { v4 as uuidv4 } from 'uuid';


export const products = [
    {
        id:1,
        name: "Item 1",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img1,
        price: 9000,
        location: "Lagos",
        stock: 6,
        featured: false,
        new: false
    },
    {
        id:2,
        name: "Item 2",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img2,
        price: 15000,
        location: "Enugu",
        stock: 10,
        featured: false,
        new: false
    },
    {
        id:3,
        name: "Item 3",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img3,
        price: 9000,
        location: "Abuja",
        stock: 5,
        featured: false,
        new: false
    },
    {
        id:4,
        name: "Item 4",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img4,
        price: 7000,
        location: "Ogun",
        stock: 20,
        featured: true,
        new: false
    },
    {
        id:5,
        name: "Item 5",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img5,
        price: 10000,
        location: "Anambra",
        stock: 1,
        featured: true,
        new: false
    },
    {
        id:6,
        name: "Item 6",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img6,
        price: 6000,
        location: "Asaba",
        stock: 20,
        featured: true,
        new: false
    },
    {
        id:7,
        name: "Item 7",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img7,
        price: 20000,
        location: "Jigawa",
        stock: 4,
        featured: true,
        new: false
    },
    {
        id:8,
        name: "Item 8",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img8,
        price: 10000,
        location: "Yobe",
        stock: 1,
        featured: false,
        new: true
    },
    {
        id:9,
        name: "Item 9",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img9,
        price: 10000,
        location: "Calabar",
        stock: 12,
        featured: false,
        new: true
    },
    {
        id:10,
        name: "Item 10",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img10,
        price: 10000,
        location: "Calabar",
        stock: 11,
        featured: false,
        new: true
    },
    {
        id:11,
        name: "Item 11",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img11,
        price: 1100,
        location: "Calabar",
        stock: 11,
        featured: false,
        new: true
    },
    {
        id:12,
        name: "Item 12",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img12,
        price: 1000,
        location: "Enugu",
        stock: 11,
        featured: false,
        new: true
    },
    {
        id:13,
        name: "Item 13",
        description: "Get comfy and comfortable with the new 2019 designer sneaker for all your events",
        image: img13,
        price: 2000,
        location: "Jigawa",
        stock: 4,
        featured: false,
        new: true
    }
]
