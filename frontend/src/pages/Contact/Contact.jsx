import React, { useState } from 'react';
import "./Contact.css";
import { ContactForm } from '../../components/Reviews/ContactForm';

export const Contact = () => {
    return (
        <section className="contact__section d-flex justify-content-center align-items-center">
            <div className="container position-relative">
                <div className="mv-900">
                    <h3 className="page-title text-uppercase mw-900">Contact US</h3>
                </div>
                <div className="contact-bg">
                    <img src="./img/about/about-1.jpg" alt="contact_bg"></img>
                </div>
                <div className="mw-900">
                    <div className="d-flex space-between mt-5 mision-vision__text ">
                        <div className='col-6'>
                            <div className='p-5'>
                                <h5 className="text-capitalize fw-normal">Our Mision</h5>
                                <div>
                                    <p>Via Montenapoleone, 21</p>
                                    <p>20121 Milano, Italy</p>
                                    <br />
                                    <p>sale@zephyra.com</p>
                                    <p>+1 246-345-0695</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='p-5'>
                                <h5 className="text-capitalize fw-normal">Our Vision</h5>
                                <div>
                                    <p>İstiklal Caddesi, No: 123</p>
                                    <p>Beyoğlu, İstanbul, Türkiye</p>
                                    <p>info@zephyra.com</p>
                                    <p>+90 212 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5 pt-5 mw-900">
                    <ContactForm/>
                </div>
            </div>
        </section>
    );
};
