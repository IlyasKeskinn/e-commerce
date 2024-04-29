import { Skeleton } from 'antd';

export const ProductCardSkelton = () => {
    return (
        <div className='product-card'>
            <div className='skeleton-img__wrapper'>
                <Skeleton.Image className='skeleton-img' active={true} />
            </div>
            <Skeleton style={{ marginTop: "30px" }} active={true} />
        </div>

    )
}

