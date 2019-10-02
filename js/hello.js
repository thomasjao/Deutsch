exports.handler = async(event, {'Content-type': 'text/html'} => {
    var name = '饒裕奇';
    return {
        statusCode: 200,
        body: `Server connected successful with status code: ${name}`
    };
}
