import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getFetchNaves } from '../../../services/GetFetch'

const ItemDetailContainer = () => {
    

    const [productIndiv, setProdIndiv] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        if(id){
            getFetchNaves.then((res) => {
              setProdIndiv(res.find(prod => prod.id === parseInt(id)))
            })
            
              .catch(err => console.log(err))
              .finally(() => setLoading(false))}
          else 
          {
            getFetchNaves.then((res) => {
              setProdIndiv(res) 
            })
              .catch(err => console.log(err))
              .finally(() => setLoading(false))
          }
        }, [id])


    console.log(productIndiv);

    return (
        loading ? <h5>Cargando el producto..</h5>
            :
        <>
            <ItemDetail prod={productIndiv} />
        </>
        
    )
}

export default ItemDetailContainer
