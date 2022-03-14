import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, collection, where, query } from "firebase/firestore";

const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,

};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app);

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId ? 
      query(collection(firestoreDb, "products"), where("category", "==", categoryId)) : 
      collection(firestoreDb, "products");

    getDocs(collectionRef).then(response => {
      const products = response.docs.map(prod => {                  
          return { id: prod.id, ...prod.data()}
      })
      resolve(products);
  }).catch(err => {
    reject("No se pudieron obtener los productos", err)
  })
})
}

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(firestoreDb, "products", productId);

        getDoc(docRef).then(response => {
            const product = { id: response.id, ...response.data()}
            resolve(product);
        }).catch(err => {
          reject("No se pudo obtener el producto", err)
        })
  })
}
