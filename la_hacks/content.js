var https = require('https');

    
	function getToken(token,callback){
        console.log("get token");
	  var options = {
	    host: 'api.twitter.com',
	    path: '/oauth2/token',
	    method: 'POST',
	    headers: {'Authorization': 'Basic ' + token,
	   'Content-Type': 'application/x-www-form-urlencoded'}
	  };

	  var req = https.request(options, function(response) {
	    var str = ''
	    response.on('data', function (chunk) {
	      str += chunk;
	    });

	    response.on('end', function () {
	      callback(JSON.parse(str));
	    });
	  });

	  req.write("grant_type=client_credentials");
	  req.end();
	}

var credential = new Buffer("SUBxCtGE3XL2k1TGF6ERNIh0S" + ":" + "adLtZk2nvylcUcA7B3DBJewyZqNYC55fmZ9hYVp3r6nJW8dQQI").toString('base64');
getToken(credential, function(response) {
	console.log(response);
});
