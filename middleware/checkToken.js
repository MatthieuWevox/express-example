
const checkTokenMw = (req, res, next) => {
    let token = req.headers.token;

    if (token === undefined) {
        res.status(401).json({error: "Token is missing"});
        return;
    }

    if (token !== "1234") {
        res.status(401).json({error: "Invalid token"});
        return;
    }

    next();
}

module.exports = checkTokenMw;