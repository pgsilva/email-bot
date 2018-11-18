

let sendHooray = (data) => {
    try {
        const mailjet = require('node-mailjet').connect('your_public_key', 'your_secret_key');
        console.log('msg: ' + data.msg)
        console.log('send: ' + data.send)
        
        const request = mailjet
            .post("send")
            .request({
                "FromEmail": "your_email_sender_api",
                "FromName": "R2D2",
                "Subject": "R2D2 send e-mail for you!",
                "Text-part": "Dear Gabriela, May the delivery force be with you!",
                "Html-part": data.msg,
                "Recipients": [
                    {
                        "Email": data.send
                    }
                ]
            });
        return true;

    } catch (e) {
        return e;
    }
}

module.exports = sendHooray;