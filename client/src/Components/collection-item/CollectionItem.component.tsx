import React from 'react'
import { ShopItemDTS } from '../../Pages/Shop/shop'
import './collectionItem.styles.scss'
 
export default function CollectionItem(props:ShopItemDTS) {
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage:`url(${props.imageUrl})`
                }}
            />

          <div className="collection-footer">
              <span className="name">{props.name}</span>
              <span className="price">{props.price}</span>
          </div>
        </div>
    )
}
