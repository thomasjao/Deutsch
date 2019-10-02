exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    header: {'Content-type': 'text/plain'},
    body: 'Let me do it'
  });
}
