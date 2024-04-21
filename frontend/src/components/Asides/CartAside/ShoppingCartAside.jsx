import "./ShoppingCartAside.css"

export const ShoppingCartAside = () => {
    return (
        <aside class="aside aside-right" id="shopingCartAside">
            <div class="shopping-cart__wraper position-relative d-flex justify-content-center">
                <div class="shopping-cart w-95">
                    <div class="aside-header  d-flex align-items-center justify-content-between">
                        <h3 class="aside-title text-uppercase fw-normal">
                            SHOPPING BAG <span class="shoping-cart-amount">( 0 )</span>
                        </h3>
                        <button class="aside-header-button">
                            <i class="bi bi-x"></i>
                        </button>
                    </div>
                    <div class="aside-content">
                        <div class="cart-drawer-item-list">

                        </div>
                      
                        <div class="cart-drawer-actions">
                            <div class="cart-total d-flex justify-content-between align-items-center">
                                <p class="fw-normal text-uppercase">Subtotal: </p>
                                <p class="sub-total-number">0$</p>
                            </div>
                            <div class="buttonwrapper">
                                <a href="shopingcart.html" class="button btn-secondary w-100">View Cart</a>
                                <a href="shop_checkout.html" class="button btn-primary w-100">Checkout</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </aside>
    );
}