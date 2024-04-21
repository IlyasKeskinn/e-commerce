export const SliderControl = () => {
    return (
        <div class="d-flex justify-content-center align-items-center">
            <div class="container position-relative">
                <div class="swipper-controller d-flex justify-content-center align-items-center">
                    <span class="swipper-pagination-bullet active" aria-label="Go to slide 1" tabindex="0"
                        role="button"></span>
                    <span class="swipper-pagination-bullet " aria-label="Go to slide 2" tabindex="1"
                        role="button"></span>
                </div>
            </div>
        </div>
    );
}