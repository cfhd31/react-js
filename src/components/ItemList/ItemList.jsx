import React from 'react'
import Item from '../Item/Item'

function ItemList({product}) {
    
    return (           
        product.map(prod=> <Item key={prod.id} prod={prod} /> )          
    )
}

export default ItemList
