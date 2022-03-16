
function sendError(res, err) {
    res.status(err.code).json({ message: err.message });
}

exports.sendError = sendError;
