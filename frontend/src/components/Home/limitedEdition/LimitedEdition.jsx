import React from 'react'
import { ProductSlider } from "../productSlider/ProductSlider";
import useFetch from '../../../hooks/useFetch';
import { ProductsSkelton } from '../../Skeltons/ProductsSkeleton';
export const LimitedEdition = () => {
    const fetchUrl = `/product/getlimitedproducts`;
    const { data, isLoading, error } = useFetch(fetchUrl);

    console.log(data);

    return (
        <React.Fragment>
            {data._id ? <ProductsSkelton /> :
                <section className="limited-products d-flex justify-content-center align-items center">
                    <div className="container position-relative ">
                        <h2 className="text-uppercase section-title text-center fw-normal my-5">Limited <strong>Edition</strong>
                        </h2>
                        <div className="swiper mySwiper">
                            {isLoading
                                ?
                                <ProductsSkelton />
                                :
                                <ProductSlider products={data} />
                            }
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>
            }
        </React.Fragment>
    )
}
