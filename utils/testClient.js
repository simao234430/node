var request=require('request');

var options = {
	headers: {"Connection": "close"},
    url: 'http://127.0.0.1:3000/v1/log',
    method: 'POST',
    json:true,
    body: {ID_list:[1,2]}
};

function callback(error, response, data) {
    if (!error && response.statusCode == 200) {
        console.log('----info------',data);
    }
}

request(options, callback);
