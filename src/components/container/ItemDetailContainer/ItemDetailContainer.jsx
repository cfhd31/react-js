import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { getFetchUnaNave } from '../../../services/GetFetch'

const ItemDetailContainer = () => {
    
    const [prod, setProd] = useState({})

    useEffect(() => {
        getFetchUnaNave
        .then( res => {        
            console.log('llamada a api') 
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            <ItemDetail prod={prod} />
        </>
    )
}

export default ItemDetailContainer
