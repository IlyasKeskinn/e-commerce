import { CollectionItem } from "../../Collection/CollectionItem";
import "./Collection.css"
export const ShopCollection = () => {
    return (
        <section className="collection-grid  d-flex justify-content-center align-items-center">
            <div className="container h-md-100">
                <div className="collection-row h-md-100">
                    <div className="col-md-6 h-md-100">
                        <CollectionItem title = "Women Collection"  image = "./img/collection/collection_grid_1.jpg"/>
                    </div>
                    {/* <!-- right collections --> */}
                    <div className="col-md-6 h-md-100">
                        <div className="collection-col-row h-md-100">
                            <CollectionItem title = "Men Collection" image = "./img/collection/collection_grid_2.jpg" />
                            <div className="h-md-100">
                                <div className="collection-row h-md-100">
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem title = "Kids Collection" image = "./img/collection/collection_grid_3.jpg" />
                                    </div>
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem title = "Home Collection"  image="./img/collection/collection_grid_2.jpg"/>
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
