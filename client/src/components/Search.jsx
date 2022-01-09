import React, {useState} from 'react';
import Error from '../components/Error'

const Search = ({setArticle}) => {

    const [valueInput, setValueInput] = useState("");
    const [error, setError] = useState(false);

    //para manejar el envio del fomulario
    const handelSubmit=(e) => {
        e.preventDefault();

        //validacion del formulario
        if (valueInput === ''){
            setError(true)
            return;
        } else {
            setError(false); //para que devuelva el estado a false
            setArticle(valueInput);//envia lo que escriba el usuario por el input. Se lo envia al padre MAIN
            setValueInput("") ;
        }
        //   
    }

    return (
        <section className='d-flex flex-column align-items-center mb-8'>
            <form className="d-flex col-md-8"
            onSubmit={handelSubmit}>
                <input className="me-sm-2 col-md-6 " type="text" placeholder="Buscar producto" 
                onChange={e => setValueInput(e.target.value)} value={valueInput}/>
                <button className="btn btn-secondary my-2 my-sm-0 col-md-2" type="submit">Buscar</button>
            </form>
            {error ? <Error/>: null} 
        </section> 
       
    )
}

export default Search

