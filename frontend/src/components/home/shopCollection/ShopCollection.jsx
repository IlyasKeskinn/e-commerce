import { CollectionItem } from "../../Collection/CollectionItem";
import "./Collection.css"
export const ShopCollection = () => {
    return (
        <section className="collection-grid  d-flex justify-content-center align-items-center">
            <div className="container h-md-100">
                <div className="collection-row h-md-100">
                    <div className="col-md-6 h-md-100">
                        <CollectionItem link={"/allproducts/Women-124326460"} title = "Women Collection"  image = "./img/collection/collection_grid_1.jpg"/>
                    </div>
                    {/* <!-- right collections --> */}
                    <div className="col-md-6 h-md-100">
                        <div className="collection-col-row h-md-100">
                            <CollectionItem  link={"/allproducts/Men-733805153"} title = "Men Collection" image = "./img/collection/collection_grid_2.jpg" />
                            <div className="h-md-100">
                                <div className="collection-row h-md-100">
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem link={"/allproducts/Kids-148992124"} title = "Kids Collection" image = "./img/collection/collection_grid_3.jpg" />
                                    </div>
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem link={"/allproducts/Kids-148992124"} title = "Home Collection"  image="./img/collection/collection_grid_2.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
