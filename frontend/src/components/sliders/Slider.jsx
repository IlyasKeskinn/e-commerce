import "./Slider.css"
import { SliderItem } from "./SliderItem";
import { SliderControl } from "./SliderControl"
import { SliderBackgrounds } from "./SliderBackground";
import sliderItems from "../../../data/slider.json"
import { useState } from "react";

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const showSlide = (index) => {
        setActiveIndex(index);
        clearInterval(sliderTimer);
    }

    const slide = () => {
        let index;
        index = activeIndex + 1;
        if (activeIndex === sliderItems.length - 1) {
            index = 0;
        }
        return index;
    }

    let sliderTimer = setTimeout(() => {
        setActiveIndex(slide())
    }, 8000);

    return (
        <div className="slider ">
            <div className=" slider-container position-relative">
                <div className="slide-show overflow-hidden position-relative">
                    <SliderBackgrounds />
                    {sliderItems.map((slideItem, index) => {
                        return <SliderItem key={slideItem.id} slideItem={slideItem} activeIndex={activeIndex} index={index} />
                    })}
                </div>
                <SliderControl totalSlides={sliderItems.length} activeIndex={activeIndex} showSlide={showSlide} />
            </div>
        </div>
    );
}