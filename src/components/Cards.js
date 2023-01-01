import React from 'react'

export default function Cards({cardsdata}) {
  return (
    <>
    {cardsdata.map(data => {
        return(
            <a href="#" className="browse__wrapper-card" key={data.title}>
                <figure>
                    <img src={data.image} alt="" />
                    <figcaption>{data.title}</figcaption>
                </figure>
            </a>
        )
    })}
    </>
  )
}
