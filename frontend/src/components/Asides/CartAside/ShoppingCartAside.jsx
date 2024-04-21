import "./ShoppingCartAside.css"

export const ShoppingCartAside = () => {
    return (
        <aside className="aside aside-right" id="shopingCartAside">
            <div className="shopping-cart__wraper position-relative d-flex justify-content-center">
                <div className="shopping-cart w-95">
                    <div className="aside-header  d-flex align-items-center justify-content-between">
                        <h3 className="aside-title text-uppercase fw-normal">
                            SHOPPING BAG <span className="shoping-cart-amount">( 0 )</span>
                        </h3>
                        <button className="aside-header-button">
                            <i className="bi bi-x"></i>
                        </button>
                    </div>
                    <div className="aside-content">
                        <div className="cart-drawer-item-list">

                        </div>
                      
                        <div className="cart-drawer-actions">
                            <div className="cart-total d-flex justify-content-between align-items-center">
                                <p className="fw-normal text-uppercase">Subtotal: </p>
                                <p className="sub-total-number">0$</p>
                            </div>
                            <div className="buttonwrapper">
                                <a href="shopingcart.html" className="button btn-secondary w-100">View Cart</a>
                                <a href="shop_checkout.html" className="button btn-primary w-100">Checkout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
    );
}