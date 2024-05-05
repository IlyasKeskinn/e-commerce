import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import "./AboutSkeleton.css"

export const AboutSkeleton = () => {
    return (
        <section className="skeleteon-about__section d-flex justify-content-center align-items-center">
            <div className="container position-relative">
                <div className="mv-900">
                    <h3 className="page-title text-uppercase mw-900">About Zephyra</h3>
                    <Skeleton variant="rectangular" width={"100%"} height={"450px"} />
                </div>
                <div className="skeleteon-about__bg">
                </div>
                <div className="mw-900">
                    <div className='p-5'>
                        <h5 className="section-title fw-normal text-uppercase">Our Story</h5>
                        <Skeleton className='py-2' />
                        <Skeleton className='py-5' />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                    <div className="d-flex space-between mt-5 mision-vision__text ">
                        <div className='col-6'>
                            <div className='p-5'>
                                <h5 className="text-capitalize fw-normal">Our Mision</h5>
                                <Skeleton />
                                <Skeleton className='py-2' />
                                <Skeleton />
                                <Skeleton className='py-5' />
                                <Skeleton />
                                <Skeleton />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-5'>
                                <h5 className="text-capitalize fw-normal">Our Vision</h5>
                                <Skeleton />
                                <Skeleton className='py-2' />
                                <Skeleton />
                                <Skeleton className='py-5' />
                                <Skeleton />
                                <Skeleton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mw-900 image-content">
                    <div className="img-wrapper col-6">
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center company-info px-5 ">

                    </div>
                </div>
                <div className="mw-900 ">
                </div>
            </div>
        </section>
    )
}
