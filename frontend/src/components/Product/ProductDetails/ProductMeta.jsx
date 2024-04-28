export const ProductMeta = ({data}) => {
    //burada kaldım
    return (
        <div className="product-single__metainfo my-5">
            <div className="meta-item">
                <label className="text-secondary">SKU: </label>
                <span className="fw-norlam">N/A</span>
            </div>
            <div className="meta-item">
                <label className="text-secondary">CATEGORIES: </label>
                <span className="fw-norlam">Casual & Urban Wear, Jackets, Men</span>
            </div>
            <div className="meta-item">
                <label className="text-secondary">TAGS: </label>
                <span className="fw-norlam">{data}</span>
            </div>
        </div>
    )
}
