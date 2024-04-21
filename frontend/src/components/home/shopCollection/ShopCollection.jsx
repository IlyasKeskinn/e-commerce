import { CollectionItem } from "../../collection/CollectionItem";
import "./Collection.css"
export const ShopCollection = () => {
    return (
        <section className="collection-grid  d-flex justify-content-center align-items-center">
            <div className="container h-md-100">
                <div className="collection-row h-md-100">
                    <div className="col-md-6 h-md-100">
                        <CollectionItem title = "Women Collection"  image = "collection_grid_1.jpg"/>
                    </div>
                    {/* <!-- right collections --> */}
                    <div className="col-md-6 h-md-100">
                        <div className="collection-col-row h-md-100">
                            <CollectionItem title = "Men Collection" image = "collection_grid_2.jpg" />
                            <div className="h-md-100">
                                <div className="collection-row h-md-100">
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem title = "Kids Collection" image = "collection_grid_3.jpg" />
                                    </div>
                                    <div className="col-md-6 h-md-100">
                                        <CollectionItem title = "Home Collection"  image="collection_grid_1.jpg"/>
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
