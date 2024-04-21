export const InstagramTile = (props) => {
    return (
        <div className="instgram__tile">
            <a href="https://www.instgram.com" target="_blank"
                className="overlay-plus overflow d-block position-relative ">
                <img style={{height : 230, width : 230}} className="instgram__img" src="./img/instagram/insta1.jpg"
                    alt="insta1"></img>
            </a>
        </div>
    );
}

