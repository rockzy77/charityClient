import React from 'react'
import CollectionItem from './CollectionItem'

export default function CollectionList(props) {
  return (
    <div className="collection__list">
      {props.listitems.map((item, i)=>{
        return <CollectionItem changed={props.changed} isSell={props.isSell} citem={item} key={item.id} no={i}/>;
      })}
    </div>
  )
}

