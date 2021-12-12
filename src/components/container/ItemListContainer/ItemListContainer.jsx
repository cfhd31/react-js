import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../../services/getFirestore'
import ItemList from '../../ItemList/ItemList'
import Loading from '../../Loading'
import './itemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const db =getFirestore()
        if (id){
            const dbQueryCategoria= db.collection('items').where('categoria','==',id).get()
            dbQueryCategoria.then (resp=> setProducts(resp.docs.map(prod =>({id:prod.id, ...prod.data()}) )))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else {
            const dbQuery= db.collection('items').get()
            dbQuery.then (resp=> setProducts(resp.docs.map(prod =>({id:prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
    },[id]) 
      
    return loading ? (
        <Loading /> ) : (

        <div className=" container">
            <div className="acomodar row justify-content-md-center">   
                <ItemList product={products} />  
            </div>
        </div>
    )
}

export default ItemListContainer
