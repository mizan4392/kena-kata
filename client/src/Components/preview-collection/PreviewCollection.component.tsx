import React from 'react'
import { ShopDTS } from '../../Pages/Shop/shop'
import CollectionItem from '../collection-item/CollectionItem.component'
import './preview-collection.styles.scss'

export default function PreviewCollection(props:ShopDTS) {
    return (
        <div className="collection-preview">
            <h1 className="title">{props.title}</h1>
            <div className="preview">
                {
                    props.items.filter((_,idx)=> idx < 4).map(item=>{
                       return <CollectionItem {...item}/> 
                    })
                }
            </div>
        </div>
    )
}
