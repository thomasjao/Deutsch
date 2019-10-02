exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 403,
    header: {'Content-type': 'text/plain'},
    body: 'Can not find URL, <a href="https://www.google.com/">Google</a>'
  });
}
