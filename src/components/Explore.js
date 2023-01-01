import React from 'react'
import exploreImages from './Explore-images'
import ExploreSlider from './ExploreSlider'

export default function Explore() {
  return (
    <section className="explore">
        <h1 className='explore__title'>Give back through BlockChain</h1>

        <div className="explore__slider">
            <ExploreSlider images={exploreImages} />
        </div>
    </section>
  )
}
