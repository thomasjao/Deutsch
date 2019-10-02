exports.handler = async(event, context) => {
    var name = '饒裕奇';
    return {
        statusCode: 200,
        body: `Server connected successful with status code: ${name}`
    };
}
