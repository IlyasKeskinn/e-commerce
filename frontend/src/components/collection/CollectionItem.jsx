export const CollectionItem = (props) => {
    const collection  =props.title.split(" ");

    return (
        <div class=" collection-item position-relative h-md-100">
            <div className="background-img" style={{ backgroundImage: `url(./img/collection/${props.image})` }} ></div>
            <div class="collection-content">
                <p class="colection-topic text-uppercase">Hot List</p>
                <h3 class="collection-title text-uppercase">
                    <strong>{collection[0]} </strong>
                    {collection[1]}
                </h3>
                <a href="#" class="btn btn-outlined">Shop Now</a>
            </div>
        </div>
    );
}