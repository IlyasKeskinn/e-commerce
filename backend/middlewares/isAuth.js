const jwt = require("jsonwebtoken");

module.exports =  function (req,res, next){
    const token = req.header("x-auth-token");
    console.log(token);
    const regexToken = token.replace(/^"|"$/g, '');

    if (!regexToken) {
       return res.status(401).json({error : "No tokens."});
    }

    try {
        const decodedToken = jwt.verify(regexToken, "mySecretKey");
        req.user = decodedToken;
        next();
    } catch (ex) {
        return res.status(401).json({error : ex});
    }
}