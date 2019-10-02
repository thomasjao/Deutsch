exports.handler = function(event, context, callback) {
  var arrMerge = function() { return [1,2,3,4].map((item) => 'ITEM ' + item).join(', ').toString();};
  return callback(null, {
    statusCode: 403,
    header: {'Content-type': 'text/plain'},
    body: arrMerge()
  });
}
