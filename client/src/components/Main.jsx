import React, {useState, useEffect} from 'react';
import Search from './Search';
import './Main.css';
import Products from './Products';
import axios from 'axios';

// import axios from 'axios';

const Main = () => {

    //  estado de mis articulos
    const [article, setArticle] = useState("");
    //estado array de productos
    const [productsArr, setProductsArr] = useState([]);
  
    useEffect(() => {
        const getProducts = async () => {
            try {
                let page = 1;
                if (article === "") {
                    const resp = await axios.get(`/api/products?page=${page}`)  //Peticion http a mi Api  
                    //accedemos a nuestros productos que estan en data- dentro de data- y luego products
                    const productsData = resp.data.data.products
                    // console.log(productsData)
                    setProductsArr(productsData)
                } else {
                    const resp = await axios.get(`/api/products?name=${article}`) //Nos traera solo el articulo que busquemos
                    //accedemos a nuestros productos que estan en data- dentro de data- y luego products
                    const productsData = resp.data.data.products;
                    // console.log(products)
                    setProductsArr(productsData)
                }
                
            } catch (error) {
                    console.log(error)
            }
        };
        getProducts();
    }, [article])



    return (
        <main>
            <div className='container_home'>
                <p className='text_home'> "Si no escalas la montaña, jamás disfurtarás de su paisaje"</p>
            </div>
            <Search setArticle={setArticle}/>
            <div className='row justify-content-center'>
                <Products productsArr={productsArr}/>
            </div>
        
        </main>
    )
}

export default Main
