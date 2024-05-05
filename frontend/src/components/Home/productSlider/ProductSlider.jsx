import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import ProductCard from '../../Product/ProductCard';
import 'swiper/css/pagination';
import "./ProductSlider.css"


export const ProductSlider = ({products}) => {
    return (
        <Swiper
            className="mySwiper"
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            }}
        >
            {products.map((product) => (
                <SwiperSlide key={product.product._id}><ProductCard product={product.product} /></SwiperSlide>
            ))}
        </Swiper>
    )
}

