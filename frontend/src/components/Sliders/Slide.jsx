import { SliderItem } from "./SliderItem";
import { SliderControl } from "./SliderControl"
import { SliderBackgrounds } from "./SliderBackground";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Loader } from "../Loader/Loader";
import "./Slider.css"

export const Slide = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const fetchURL = `/slider/getSliders`
    const { data, isLoading, error } = useFetch(fetchURL);

    const showSlide = (index) => {
        setActiveIndex(index);
        clearInterval(sliderTimer);
    }

    const slide = () => {
        let index;
        index = activeIndex + 1;
        if (activeIndex === data.length - 1) {
            index = 0;
        }
        return index;
    }

    let sliderTimer = setTimeout(() => {
        setActiveIndex(slide())
    }, 8000);

    if (isLoading) {
        return <Loader />
    }
    else {
        return (
            <div className="slider ">
                <div className=" slider-container position-relative">
                    <div className="slide-show overflow-hidden position-relative">
                        <SliderBackgrounds />
                        {data.map((slideItem, index) => {
                            return <SliderItem key={slideItem._id} slideItem={slideItem} activeIndex={activeIndex} index={index} />
                        })}
                    </div>
                    <SliderControl totalSlides={data.length} activeIndex={activeIndex} showSlide={showSlide} />
                </div>
            </div>
        );
    }
}