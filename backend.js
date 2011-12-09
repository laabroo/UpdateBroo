// UpdateBroo -- backend.js
// UpdaterusBeta -- backend.js
var url = require('url');
var http = require('http');
var QS = require('querystring');
var util = require('util');
var sys = require('sys');
var scaling = new(require('blaast/scaling').Scaling)();

/***************************** Deklarasi *************************/
var siteUrl = url.parse("http://updaterus.com/index/at_time/");
var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();

var headers = {
    'Host': siteUrl.host,
    'X-Requested-With': 'XMLHttpRequest'
};

/***************************** Connection Data *************************/
app.message(function(client, action, data) {
    console.log('Action : ' + action);
    console.log('Data : ' + data.text);
});

/***************************** Implementasi *************************/

var site = http.createClient(siteUrl.port || 80, siteUrl.host);
var request = site.request('GET', siteUrl.pathname + jam + '/' + menit, headers);
console.log('Url : ' + siteUrl.pathname + jam + '/' + menit);
request.end();

var idUser = null;

request.on('response', function(response) {
    response.setEncoding('utf8');
    console.log('Status : ' + response.statusCode);
    response.on('data', function(data) {
        console.log(data);
        var dataJSON = JSON.parse(data);

        idUser = dataJSON.id;


        console.log('ID User: ' + dataJSON.id);
    });


});


app.setResourceHandler(function(request, response) {
    app.debug('Client request response-id : ' + request.id);

    function sendReply(response, error, imageType, data) {
        if (error) {
            app.warm('Failed to load image : ' + error);
            response.failed();
        } else {
            app.debug('Load image.');

            response.reply(imageType, data);
        }
    }

    if (request.id === 'A') {

        var idUrl = 'http://updaterus.com/images/users/' + idUser + '/1.jpg';
        scaling.scale(idUrl, request.display_width, request.display_height, 'image/jpeg', function(err, data) {
            sendReply(response, err, 'image/jpeg', data);
            console.log(response);
            console.log('IdUrl : ' + idUrl);
        });
    } else {
        resource.notFound();
    }


});




log.info('Hello from backend bootstrap.');