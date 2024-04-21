import "./Slider.css"
import { SliderItem } from "./SliderItem";
import {SliderControl} from "./SliderControl"
import { SliderBackgrounds } from "./SliderBackground";

export const Slider = () => {
    return (
        <div className="slider ">
            <div className=" slider-container position-relative">
                <div className="slide-show overflow-hidden position-relative">
                    <SliderBackgrounds/>
                    <SliderItem />
                </div>
                <SliderControl/>
            </div>
        </div>
    );
}