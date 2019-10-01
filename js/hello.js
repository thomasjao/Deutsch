exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: "<a href='wörter/abschnitt-9.csv'>Abschnitt 9</a>"
    });
}
