import React from 'react'

export const Reciept = ({ cart, isCheckoutPage }) => {
    return (
        <div className="shopping-cart__totals">
            <h3 className="fw-normal text-uppercase">Cart Totals</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Subtotal</th>
                        <td className="sub-total-number">${cart.total.sub_total}</td>
                    </tr>
                    <tr>
                        <th>Shipping</th>
                        <td>$4.99</td>
                    </tr>
                    <tr>
                        <th>VAT</th>
                        <td>$19</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td className="sub-total-number">${cart.total.total}</td>
                    </tr>
                </tbody>
            </table>
            {isCheckoutPage &&
                <table className="order-list-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.cartItems.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}
