import React from 'react'
import Cart from './Cart'

export default function CartContainer() {
    const [productIndiv, setProdIndiv] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

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
    }, [id])

    return loading ? (
        <Loading /> ) : (

        <div>
            <Cart prod={productIndiv} /> 
        </div>
    )
}
