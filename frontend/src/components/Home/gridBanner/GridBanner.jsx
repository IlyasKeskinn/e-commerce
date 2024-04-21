import { CollectionItem } from "../../Collection/CollectionItem";
import "./GridBanner.css"

export const GridBanner = () => {
    return(
        <section className="grid-banner d-flex justify-content-center align-items-center">
        <div className="container h-md-100">
            <div className="collection-row h-md-100">
                <div className="col-md-6 h-md-100 text-light">
                 <CollectionItem title = "Women Collection" image = "./img/gridbanner/banner_1.jpg" />
                </div>
                <div className="col-md-6 h-md-100">
                 <CollectionItem title="Men Collection" image="./img/gridbanner/banner_2.jpg"/>
                </div>
            </div>
        </div>
    </section>
    );
}