exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    header: {'Content-type': 'text/plain'},
    body: '<a href="https://www.google.com/">Google</a>'
  });
}
