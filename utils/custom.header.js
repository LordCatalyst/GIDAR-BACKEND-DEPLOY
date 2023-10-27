function responseWithCustomHeader(res, statusCode, statusMsg, body) {
    res.writeHead(statusCode, statusMsg, {
        "content-type": "application/json"
    }).end(body);
}

module.exports = { responseWithCustomHeader };
