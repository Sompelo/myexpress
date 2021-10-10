var express = require('express');
var app = express();

//This responmds with "Hello World" on the homepage
app.get('/', function(req, res)
	{
		console.log("Got a GET request for the homepage");
		res.send('Hello GET');
	})

//This reponds a POST request for the homepage
app.post('/', function(req, res) 
	{
		console.log("Got a POST request for the homepage");
		res.send('Hello POST');
	})

//This responds a DELETE request for the /del_user page.
app.delete('/del_user', function(req, res)
	{
		console.log("Got a DELETE request for /del_user");
		res.send('Hello DELETE');
	})
app.get('/list_user', function(req, res)
	{
		console.log("Got a GET request for /list_user");
		res.send('Page Listing');
	})
app.get('/ab*cd', function(req, res)
	{
		console.log("Got a GET request for /ab*cd");
		res.send('Page Pattern Match');
	})
var server = app.listen(8081, function()
	{
		var host = server.address().address
		var port = server.address().port

		console.log("Ecample app listening at http://%s:%s", host, port)
	})

