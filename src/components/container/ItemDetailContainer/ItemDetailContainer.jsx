import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'
import { getFetchNaves } from '../../../services/GetFetch'
import { getFirestore } from '../../../services/getFirestore';

const ItemDetailContainer = () => {
    const [productIndiv, setProdIndiv] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    //const [prod, setProd] = useState({})

    useEffect(() => { 
        const db =getFirestore()
        if(id){
            const dbQueryIndividual= db.collection('items').doc(id).get()
            dbQueryIndividual.then((res) => {
            setProdIndiv({id:res.id, ...res.data()})
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else{
            const dbQuery= db.collection('items').get().then((res) => {
                dbQuery.setProdIndiv(res.data()) 
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

        /*if(id){
            getFetchNaves.then((res) => {
              setProdIndiv(res.find(prod => prod.id === parseInt(id)))
            })
              .catch(err => console.log(err))
              .finally(() => setLoading(false))
        }
        else {
            getFetchNaves.then((res) => {
              setProdIndiv(res) 
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }*/
    }, [id])

    return (loading? <h5>Cargando el producto..</h5>:
        <>
            <ItemDetail prod={productIndiv} /> 
        </>
    )
}

export default ItemDetailContainer
