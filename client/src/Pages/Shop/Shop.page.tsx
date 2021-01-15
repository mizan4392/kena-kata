import React, { useState } from 'react'
import PreviewCollection from '../../Components/preview-collection/PreviewCollection.component'
import SHOP_DATA from '../data/shop.data'
import { ShopDTS } from './shop'

export default function Shop() {

    const [collections,setCollections] = useState<ShopDTS[]>(SHOP_DATA)
    return (
        <div className="shop-page">
            {
                collections.map(col=>(
                    <PreviewCollection key={col.id} {...col}/>
                ))
            }
        </div>
    )
}
