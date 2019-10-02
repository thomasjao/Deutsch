exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: `Server connected successful with status code: ${statusCode}`
    };
}
