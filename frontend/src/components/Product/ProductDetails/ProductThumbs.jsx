import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const ProductThumbs = ({ activeImage, setActiveImage, productImg }) => {
    return (
        <div className="product-thumb swiper mySwiper2">
            <Swiper
                modules={[Navigation]}
                className="gallery-thumbs"
                spaceBetween={10}
                slidesPerView={5}
                navigation={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                }}
            >
                {productImg.map((img) => {
                    return (
                        <SwiperSlide key={img}>
                            <img src={`../src/images/${img}`} style={{ height: 104, width: 104 }}
                                className={`img-fluid gallery-thumbs__img ${activeImage == img ? "active" : ""}`}
                                alt=""
                                onClick={() => { setActiveImage(img) }}
                            >
                            </img>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </div>
    )
}

