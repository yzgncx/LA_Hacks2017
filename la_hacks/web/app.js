var Twitter = require("node-twitter-api");
var express = require('express');

var app = express();

var _oauthVerifier;
var _oauthToken;
var _requestToken;
var _requestSecret;
var _accessToken;
var _accessSecret;

var twitter = new Twitter({
    consumerKey: "Dyc0IRbGT7xfdAqJF4ilauUfp",
   	consumerSecret: "uivRi9QL2nqP3gnu5SbofCYP6NZ9L8Oe5aLQvJEzcnzT4j46lw",
   	callback: "http://localhost:3000/twitter-done"
});

twitter.getRequestToken(function(err, requestToken, requestSecret) {
	if (err) {
	//	res.status(500).send(err);
    }
	else {
		_requestToken = requestToken;
        _requestSecret = requestSecret;
		console.log("          retrieved request token and secret           ");
		console.log(requestToken);
		console.log(requestSecret);
        //res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + requestToken);
		//console.log("after res.redirect");
	    }
	});


app.get("/twitter-done", function(req,res) {
	console.log("PART 1:        in apt.get /twitter-done")
	_oauthVerifier = req.query.oauth_verifier;
	_requestToken = req.query.oauth_token;
	
	
	console.log("     oauth_verifier");
	console.log(_oauthVerifier);
	twitter.getAccessToken(_requestToken, _requestSecret, _oauthVerifier, function(error, _accessToken, _accessSecret, results) {
		if (error) {
			console.log(error);
		} else {
			console.log("      access token and secret")
			console.log(_accessToken);
			console.log(_accessSecret);
			
			//res.redirect("http://localhost:3000/login")
			res.redirect("http://localhost:3000/public/signin.html");
			tweet();
			//Step 4: Verify Credentials belongs here 
		}
	});
});

app.get("/login", function(req, res){
	res.redirect("https://api.twitter.com/oauth/authenticate?oauth_token=" + _requestToken);
});

function tweet() {	
	console.log("      in tweet function");
	twitter.statuses("update", {
			status: "Hello world!"
		},
		_accessToken,
		_accessSecret,
		function(error, data, response) {
			if (error) {
				console.log("      error");
				console.log(error);
				// something went wrong 
			} else {
				// data contains the data sent by twitter 
			}
		});
}

module.exports = app;