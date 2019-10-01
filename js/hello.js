exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: "<p style='color:red'>Take some HTML code here.</p><a href='http://www.google.com'>Google</a>"
    };
}
