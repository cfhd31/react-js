import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetchNaves } from '../../../services/GetFetch'
import ItemList from '../../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getFetchNaves
            .then( res => {        
                console.log('llamada a api')
                setProduct(res.filter(prod => prod.tipo === id ))
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))              
        }else{
            getFetchNaves
            .then( res => {        
                console.log('llamada a api')
                setProduct(res)
            })    
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))  
        }
    },[id]) 
      


    return (
        <div className=" ">
            <div className="acomodar row justify-content-md-center">            
                <ItemList product={product} />  
            </div>
        </div>
    )
}

export default ItemListContainer
