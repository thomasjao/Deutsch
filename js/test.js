exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 200,
    body: 'Let me do it'
  });
}
