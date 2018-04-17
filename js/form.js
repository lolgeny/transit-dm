var DMAWS = {};

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:a28d4c88-d298-401a-9097-ac60953e5057',
});

DMAWS.sendToTopic = function() {
    var sns = new AWS.SNS();
    var msg = "From: " + document.querySelector('#name').value
        + '<' + document.querySelector('#email').value + '>\n\n'
        + document.querySelector('#message').value;
    var params = {
        Message: msg,
        Subject: 'DanceMagic website contact form',
        TopicArn: 'arn:aws:sns:eu-west-2:679679891555:DanceMagic_Contact_Form'
    };
    sns.publish(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
};
