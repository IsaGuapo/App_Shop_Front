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
    //estado para la página
    const [page, setPage] = useState(1);
    //estado para la ordenacion-sort
    const [sort, setSort] = useState();
 
    
    //peticion http
    useEffect(() => {
        const getProducts = async () => {
            try {
            
                if (article === "") {
                    const resp = await axios.get(`/api/products?page=${page}&sort=${sort}`)  //Peticion http a mi Api  
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
    }, [article,page,sort])

//Funcion para pasar de pagina. Se va a activar cuando demos click en el onclick de mi boton
        const nextPage = () => {
            const newPage = page+1;
            setPage(newPage) ; //cambiamos el estado inicial de page a mi nuevo estado de pagina newpage

        }
//Funcion para ir a la pagina anterior
        const previewPage = () => {
            const newPage = page-1;
            setPage(newPage) ;
        }
//Funcion para cada numero de pagina
        const page1 = () => {
            setPage(1) ;
        };

        const page2 = () => {
        setPage(2) ;
        };

        const page3 = () => {
            setPage(3) ;
        };

//ordenar por precios
        const sortPrice = () => {
           if (sort === "price"){
               setSort("-price")
           }  else {
               setSort("price")
           }
        }

//ordenar por valoracion-rating
const sortRating = () => {
    if (sort === "rating"){
        setSort("rating")
    }  else {
        setSort("rating")
    }
 }
// //ordenar por fabricante
// const sortFab = () => {
//     if (sort === "fab"){
//         setSort("-rating")
//     }  else {
//         setSort("rating")
//     }
//  }

    return (
        <main>
            <div className='container_home'>
                <p className='text_home'> "Si no escalas la montaña, jamás disfurtarás de su paisaje"</p>
            </div>
                <Search setArticle={setArticle}/>
            <div className='d-flex justify-content-center gap-3 mt-5'>
                <p>Ordena por :</p>
                <button type="button" className="btn btn-secondary " onClick={sortPrice}>Precio</button>
                <button type="button" className="btn btn-secondary" onClick={sortRating}>Valoraciones</button>
                {/* <button type="button" className="btn btn-secondary" onClick={sortFab}>Fabricante</button> */}
            </div>
            <div className='row justify-content-center'>
                <Products productsArr={productsArr}/>
            </div>
            <div>
                <ul className="d-flex justify-content-center mt-5">
                      {/* ternario para que no vaya mas atrás de la pagina 1 */}
                    <li className={`page-item ${page === 1 ? "disabled" : null }`}>
                    <button className="page-link" onClick={previewPage}>&laquo;</button>
                    </li>
                    <li className="page-item active">
                    <button className="page-link " onClick={page1}>1</button>
                    </li>
                    <li className="page-item">
                    <button className="page-link" onClick={page2} >2</button>
                    </li>
                    <li className="page-item">
                    <button className="page-link" onClick={page3} >3</button>
                    </li>
                    {/* ternario para que no vaya mas adelante de la ultima pagina (la3)  */}
                    <li className={`page-item ${page === 3 ? "disabled" : null }`}>
                    <button className="page-link" onClick={nextPage}>&raquo; </button>
                    </li>
                </ul>
                </div>
        
        </main>
    )
}

export default Main
