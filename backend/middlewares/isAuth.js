const jwt = require("jsonwebtoken");
exports.module = function async (req, res, next) {
    const token = req.header("x-auth-token");

    if (!token) {
        res.status(401).json({ error: "No tokens" });
    }

    try {
        const decodedToken = jwt.decode(token, "secretKeys");
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ error: "Not valid token." })
    }

}