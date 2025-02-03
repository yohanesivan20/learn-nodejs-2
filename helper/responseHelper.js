const response = (statusCode, datas, statusMessage, res) => {
    res.status(statusCode).json({
        payload: {
            status_code: statusCode,
            message: statusMessage,
            data: datas
        }
    })
}

module.exports = response