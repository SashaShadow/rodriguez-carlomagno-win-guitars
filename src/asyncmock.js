import bass from "./components/ItemCount/washburnt24.jpg";

const items = [
    {
        title: "Bajo Washburn T24",
        id: "1",
        image: bass,
        price: "$70000",
        details: "Bajo de una sola pieza, con excelente tono. Un canal muy famoso de covers en YouTube lo utiliza para sus videos.",
        stock: "1",
    },
    {
        title: "Fender Stratocaster American Black",
        id: "2",
        image: "https://http2.mlstatic.com/D_NQ_NP_756855-MLA45608293264_042021-O.webp",
        price: "$84000",
        details: "Guitarra clásica de origen estadounidense, color negro.",
        stock: "10",
    },
    {
        title: "Rickenbacker Bass 4003",
        id: "3",
        image: "https://d1aeri3ty3izns.cloudfront.net/media/48/480698/600/preview.jpg",
        price: "$160000",
        details: "Bajo clásica utiilizado por múltiples artistas, especialmente en el rock.",
        stock: "4",
    }
];

export const miProducto = () => { 
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(items)
    }, 2000)
})};

export const getItem = () => { 
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(items[0])
    }, 2000)
})};
