exports.handler = async(event, context) => {
    return {
        myname: '饒裕奇',
        statusCode: 200,
        body: "<form method='post' action=''><label>Name: <input type='text' name='name' placeholder='請輸入姓名' value='`${myname}`' required/></label><br /><label>Sex: <input type='radio' name='sex' value='male'/> 男<input type='radio' name='sex' value='female'/></label><br /><label>Age: <input type='text' name='age' value=''/></label>"
    };
}
