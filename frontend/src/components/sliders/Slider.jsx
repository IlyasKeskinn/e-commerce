import "./Slider.css"
import { SliderItem } from "./SliderItem";
import {SliderControl} from "./SliderControl"
import { SliderBackgrounds } from "./SliderBackground";

export const Slider = () => {
    return (
        <div class="slider ">
            <div class=" slider-container position-relative">
                <div class="slide-show overflow-hidden position-relative">
                    <SliderBackgrounds/>
                    <SliderItem />
                </div>
                <SliderControl/>
            </div>
        </div>
    );
}