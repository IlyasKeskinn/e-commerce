import "./InstagramArea.css"
import { InstagramTile } from "./InstagramTile";
import instagramPhotos from "../../../data/instagrams.json"

export const InstagramArea = () =>{
    console.log(instagramPhotos);
    return(
        <section className="instgram__section section my-5 d-flex justify-content-center align-items-center">
        <div className="container">
            <h2 className="section-title text-center text-uppercase fw-normal my-5">
                <strong>
                    @Zephyra
                </strong>
            </h2>
            <div className="instgram-area">
                {instagramPhotos.map((photo,index) => {
                    return <InstagramTile key={index} photo={photo}/>
                } )}               
            </div>
        </div>
    </section>
    );
}