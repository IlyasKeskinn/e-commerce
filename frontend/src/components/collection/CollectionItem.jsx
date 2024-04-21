export const CollectionItem = (props) => {
    const collection  =props.title.split(" ");

    return (
        <div className=" collection-item position-relative h-md-100">
            <div className="background-img" style={{ backgroundImage: `url(${props.image})` }} ></div>
            <div className="collection-content">
                <p className="colection-topic text-uppercase">Hot List</p>
                <h3 className="collection-title text-uppercase">
                    <strong>{collection[0]} </strong>
                    {collection[1]}
                </h3>
                <a href="#" className="btn btn-outlined">Shop Now</a>
            </div>
        </div>
    );
}