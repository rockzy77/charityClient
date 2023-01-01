import React from 'react'
import Cards from './Cards'
import { browseData } from './Data'

export default function Browse() {
  return (
    <section className="browse">
        <h3 className='browse__title'>Browse by Charity</h3>
        <div className="browse__wrapper">
            <Cards cardsdata={browseData}/>
        </div>
    </section>
  )
}
