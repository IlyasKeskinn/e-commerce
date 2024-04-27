import React, { useEffect, useState } from 'react';
import {SubMenuItem} from './SubMenuItem';

export const MegaMenu = () => {
    const apiUrl = import.meta.env.VITE_BASE_API_URL;
    const fetchUrl = "/category/getCategories";
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${apiUrl}${fetchUrl}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (response.ok) {
                    console.log(response);
                    const data = await response.json();
                    setCategories(data);
                }
                else {
                    const { error } = await response.json();
                    console.log(error);
                }
            } catch (error) {
                if (message instanceof Error) {
                    console.log(error);
                }
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, [apiUrl]);
    //TODO REFACTOR CODE 
    if (isLoading) {
        return <div></div>
    } else {
        return (<div className="container mega-menu-items">
            {categories.map((category => {
                return (
                    <div className="col">
                        <ul className="default-menu-content">
                            <li className="sub-menu__item">
                                <a href="#" className="menu-link btn btn-outlined-half">
                                    <h4 className="mega-menu-title">{category.name}</h4>
                                </a>
                            </li>
                            {category.subcategory.map((subCat) => { return (<SubMenuItem key={subCat._id} menuItem={subCat} />);})}
                        </ul>
                    </div>
                );
            }))}
            <div className="col">
                <div className="position-relative">
                    <img src="./img/mega-menu-item.jpg" alt="shopnowImg" className="mega-menu__img"></img>
                    <div className="mega-menu__mediacontent">
                        <h3>New</h3>
                        <h3>Horizons</h3>
                        <a href="#" className="btn btn-outlined"> Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }


}
