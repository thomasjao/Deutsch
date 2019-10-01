exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: "<form method='post' action=''><label>Name: <input type='text' name='name' placeholder='請輸入姓名' required/></label><br /><button>Press Me</button></form>"
    };
}
