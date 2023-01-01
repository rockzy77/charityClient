import React from 'react'
import ImageSlider from './ImageSlider';

export default function ImageSliderSection(props) {
    const {sectionclass, heading, data} = props;

  return (
    <section className={sectionclass}>
        <h3 className={sectionclass + "__title"}>{heading}</h3>
        <div className={sectionclass + "__slider"}>
            <ImageSlider sliderdata={data} slideclass={sectionclass}/>
        </div>
    </section>
  )
}
