import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetchNaves } from '../../../services/GetFetch'
import { getFirestore } from '../../../services/getFirestore'
import ItemList from '../../ItemList/ItemList'
import './itemListContainer.css'

const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)    

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('items').get()
        dbQuery
        .then(resp => setProduct( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } )) ))
        //.then(resp => setProduct({id: resp.id, ...resp.data})) 
        //.then(resp => console.log(resp))

    //     if (id) {
    //         getFetchNaves
    //         .then( res => {        
    //             console.log('llamada a api')
    //             setProduct(res.filter(prod => prod.tipo === id ))
    //         })    
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))              
    //     }else{
    //         getFetchNaves
    //         .then( res => {        
    //             console.log('llamada a api')
    //             setProduct(res)
    //         })    
    //         .catch(err => console.log(err))
    //         .finally(()=> setLoading(false))  
    //     }
     },[id]) 
      
     console.log (product)
    return (
        loading? <h5>Cargando los productos..</h5> :
        <div className=" container">
            <div className="acomodar row justify-content-md-center">            
                <ItemList product={product} />  
            </div>
        </div>
    )
}

export default ItemListContainer
