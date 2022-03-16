
exports.USER_EXIST = { code: 461, message: "Username taken" };
exports.USERNAME = { code: 462, message: "Username does not meet requirements" };
exports.PASSWORD = { code: 463, message: "Password does not meet strength requirements" };
exports.INTERNAL = { code: 500, message: "Internal Server Error" };

exports.send = function(res, err) {
    res.status(err.code).json({ message: err.message });
}

