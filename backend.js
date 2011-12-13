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
var idUser = null;
app.message(function(client, action, data) {
    console.log('Action : ' + action);
    console.log('Data : ' + data);
    /***************************** Implementasi *************************/
setTimeout(function(){
    var site = http.createClient(siteUrl.port || 80, siteUrl.host);
    var request = site.request('GET', siteUrl.pathname + jam + '/' + menit, headers);
    console.log('Url : ' + siteUrl.pathname + jam + '/' + menit);
    request.end();

    request.on('response', function(response) {
        response.setEncoding('utf8');
        console.log('Status : ' + response.statusCode);
        response.on('data', function(data) {
            console.log(data);
            var dataJSON = JSON.parse(data);
            console.log(dataJSON);
            console.log('Firstname : ' + dataJSON.firstname);
            console.log('Lastname : ' + dataJSON.lastname);
            console.log('Birthday : ' + dataJSON.birthday);
            console.log('Location : ' + dataJSON.location);
            console.log('Occupation : ' + dataJSON.occupation);
            console.log('Hobby : ' + dataJSON.hobby);
            console.log('Cute : ' + dataJSON.cute);
            console.log('Facebook : ' + dataJSON.facebook);
            console.log('Twitter : ' + dataJSON.twitter);

            client.msg('getdetails', {
                text: {
                    firstname: dataJSON.firstname,
                    lastname: dataJSON.lastname,
                    birthday: dataJSON.birthday,
                    location: dataJSON.location,
                    occupation: dataJSON.occupation,
                    hobby: dataJSON.hobby,
                    cute: dataJSON.cute,
                    facebook: dataJSON.facebook,
                    twitter: dataJSON.twitter,
                    id_ : dataJSON.id

                }
            });

            idUser = dataJSON.id;
            console.log('ID User: ' + dataJSON.id);
        });
    });
},500);

});
/***************************** Connection Data *************************/
 var site = http.createClient(siteUrl.port || 80, siteUrl.host);
    var request = site.request('GET', siteUrl.pathname + jam + '/' + menit, headers);
    console.log('Url : ' + siteUrl.pathname + jam + '/' + menit);
    request.end();

    

    request.on('response', function(response) {
        response.setEncoding('utf8');
        console.log('Status : ' + response.statusCode);
        response.on('data', function(data) {
            console.log(data);
            var dataJSON = JSON.parse(data);
            console.log(dataJSON);
            
            idUser = dataJSON.id;
            console.log('Id User : ________ '+idUser);
        });
    });

app.setResourceHandler(function(request, response) {

    app.debug('Client requested resource-id=' + request.id);
    
    function sendReply(response, error, imageType, data) {
        if (error) {
           app.warn('Failed to load image: ' + error);
           response.failed();
        } else {
           app.debug('Loaded image.');
           response.reply(imageType, data);
        }
    }
    
    if (request.id !== null) {
        scaling.scale(request.id, request.display_width, request.display_height, 'image/jpeg',
            function(err, data) {
                sendReply(response, err, 'image/jpeg', data);
            }
        );
    }
});

log.info('Hello from backend bootstrap.');