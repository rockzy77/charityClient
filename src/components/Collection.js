import React from 'react'
import CollectionList from './CollectionList'

export default function Collection(props) {
  return (
    <div className="collection">
        <div className="collection__header">
            <span>Collection</span>
            <span>Floor Price</span>
            <span>Volume</span>
        </div>
        <CollectionList changed={props.changed} isSell={props.isSell} listitems={props.items}/>
    </div>
  )
}
