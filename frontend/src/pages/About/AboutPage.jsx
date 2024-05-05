import React from 'react'
import { ServicesPromotion } from "../../components/ServicePromotion/ServicePromotion"
import useFetch from '../../hooks/useFetch';
import { AboutSkeleton } from '../../components/Skeltons/AboutSkeleton';
import "./AboutPage.css"

export const AboutPage = () => {
    const fetchURL = "/settings/about/getabout";
    const { data, isLoading, error } = useFetch(fetchURL);

    if (isLoading) {
        return <AboutSkeleton/>
    }
    return (
        <React.Fragment>
            {data.length <= 0 || !data[0]._id ? <p>Not Found About</p> :
                <section className="about__section d-flex justify-content-center align-items-center">
                    <div className="container position-relative">
                        <div className="mv-900">
                            <h3 className="page-title text-uppercase mw-900">{data[0].title}</h3>
                        </div>
                        <div className="about-bg">
                            <img src="./img/about/about-1.jpg" alt="about_bg"></img>
                        </div>
                        <div className="mw-900">
                            <h5 className="section-title fw-normal text-uppercase">Our Story</h5>
                            <div dangerouslySetInnerHTML={{ __html: data[0].story }}></div>
                            <div className="d-flex space-between mt-5 mision-vision__text ">
                                <div>
                                    <h5 className="ßtext-capitalize fw-normal">Our Mision</h5>
                                    <div dangerouslySetInnerHTML={{ __html: data[0].mision }}></div>
                                </div>
                                <div>
                                    <h5 className="text-capitalize fw-normal">Our Vision</h5>
                                    <div dangerouslySetInnerHTML={{ __html: data[0].vision }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="mw-900 image-content">
                            <div className="img-wrapper col-6">
                                <img src="./img/about/about-2.jpg" alt="about-2"></img>
                            </div>
                            <div className="col-6 d-flex flex-column justify-content-center company-info px-5 ">
                                <h5 className="text-capitalize fw-normal">The Company</h5>
                                <div dangerouslySetInnerHTML={{ __html: data[0].the_company }}></div>
                            </div>
                        </div>
                        <div className="mw-900 ">
                            <ServicesPromotion />
                        </div>
                    </div>
                </section>
            }
        </React.Fragment>

    )
}
