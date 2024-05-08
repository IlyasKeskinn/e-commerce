const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.postPayment = async (req, res) => {
    const { address, user, products } = req.body;

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: product.name,
                images: [product.img],
                metadata: { "size": product.selectedSize, "color": product.selectedColor }
            },
            unit_amount: Math.round(product.price * 100),

        },
        quantity: product.amount,

    }));

    try {
        const session = await stripe.checkout.sessions.create({
            customer_email: user.email,
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_DOMAIN}/payment/confirmation`,
            payment_intent_data: {
                metadata: {
                    "user_email": user.email,
                    "address_id": address._id,
                    "status": "payment_received",
                },
            },

        })
        res.status(200).json({ id: session.id });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
    }
}