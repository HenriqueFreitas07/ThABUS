import { useState } from 'react'
import PassCard from './PassCard';

type VerticalCarouselProps = {
    items?: any[]
}

export default function VerticalCarousel({ items }: VerticalCarouselProps) {
    
«

    return (
        <div className="w-full h-full relative">
            {.map((item, idx) => (
                <div
                    key={idx}
                    className={`w-full h-fit absolute text-white bg-blue top-0 left-0 transition-all`}
                    style={{ transform: `translateY(${(110 * ((idx - activeIndex) + 1))+100}%)` , zIndex:`${Math.abs(items.length - (idx - activeIndex))}`, opacity:`${1 / (((idx - activeIndex)+1)) }`}}
                    onClick={()=>{changeFocus(idx)}}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}
