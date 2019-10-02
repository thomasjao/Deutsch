exports.handler = function(event, context, callback) {
  return callback(null, {
    statusCode: 403,
    header: {'Content-type': 'text/plain'},
    body: [1,2,3,4].map((item) => 'ITEM ' + item).join(', ').toString()
  });
}
