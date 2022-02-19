import bass from "./components/ItemCount/washburnt24.jpg";

const items = [
    {
        title: "Bajo Washburn T24",
        id: 1,
        image: "https://d1aeri3ty3izns.cloudfront.net/media/47/473317/600/preview.jpg",
        price: "$70000",
        details: "Bajo de una sola pieza, con excelente tono. Un canal muy famoso de covers en YouTube lo utiliza para sus videos.",
        category: "bass",
        stock: 1,
    },
    {
        title: "Fender Stratocaster American Black",
        id: 2,
        image: "https://http2.mlstatic.com/D_NQ_NP_756855-MLA45608293264_042021-O.webp",
        price: "$84000",
        details: "Guitarra clásica de origen estadounidense, color negro.",
        category: "guitar",
        stock: 10,
    },
    {
        title: "Rickenbacker Bass 4003",
        id: 3,
        image: "https://d1aeri3ty3izns.cloudfront.net/media/48/480698/600/preview.jpg",
        price: "$160000",
        details: "Bajo clásica utiilizado por múltiples artistas, especialmente en el rock.",
        category: "bass",
        stock: 4,
    },
    {
        title: "Höfner Bass Ignition Sunburst",
        id: 4,
        image: "https://d1aeri3ty3izns.cloudfront.net/media/62/620825/600/preview.jpg",
        price: "$90000",
        details: "Bajo cuya fama se le atribuye a Paul McCartney",
        category: "bass",
        stock: 2,
    },
    {
        title: "Fender Telecaster Standard",
        id: 5,
        image: "https://http2.mlstatic.com/D_NQ_NP_926930-MLA44974797695_022021-O.webp",
        price: "$130000",
        details: "Guitarra tradicional de Fender",
        category: "guitar",
        stock: 2,
    },
    {
        title: "Gibson Les Paul Slash",
        id: 6,
        image: "https://http2.mlstatic.com/D_NQ_NP_689310-MLA44531284430_012021-O.webp",
        price: "$500000",
        details: "Representa la influencia de las guitarras Gibson que Slash ha utilizado durante su carrera.",
        category: "guitar",
        stock: 4,
    },
];


/*
export const miProducto = () => { 
    return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(items)
    }, 2000)
})}; */

export const getItem = (id) => { 
    return new Promise((resolve) => {
    const prod = items.find(p => p.id  === parseInt(id));
    setTimeout(() => {
        resolve(prod)
    }, 2000)
})};

export const getByCategory = (category) => {
    return new Promise((resolve, reject) => {
        const cate = items.filter(p => category ? p.category === category : items)
            if (cate.length > 0) {
            setTimeout(() => {
                resolve(cate)
            }, 250)
            } else {
                reject("No se encontraron productos")
            }
        })};

