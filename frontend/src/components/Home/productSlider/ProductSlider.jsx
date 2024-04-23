import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ProductCard } from '../../Product/ProductCard';
import 'swiper/css/pagination';
import "./ProductSlider.css"


const ProductSlider = (props) => {
    return (
        <section className="limited-products d-flex justify-content-center align-items center">
            <div className="container position-relative ">
                <h2 className="text-uppercase section-title text-center fw-normal my-5">Limited <strong>Edition</strong>
                </h2>
                <div className="swiper mySwiper">
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
                        {props.products.map((product) => (
                            <SwiperSlide key={product.id}><ProductCard product={product} /></SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductSlider)