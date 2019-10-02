exports.handler = function( event, context, callback) {
  return callback(null, {
    statusCode: 200,
    headers: {'Content-Type': 'text/json+xml'},
    body: '{"cities":[{"city": "Taipei","mayor":"柯文哲"},{"city":"New Taipei","mayor": "侯友宜"},{"city":"台中市","mayor": "盧秀燕"},{"city":"台南市","市長":"黃偉哲"},{"城市":"高雄市","市長":"韓國瑜"},{"城市":"桃園市","市長":"鄭文燦"}]}'
  });
}
