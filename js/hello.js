exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: function(3) { return 3 + 3; }
    };
}
