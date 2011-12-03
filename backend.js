// UpdateBroo -- backend.js
// UpdaterusBeta -- backend.js

var url = require('url');
var http = require('http');
var QS = require('querystring');
var util = require('util');
var sys = require('sys');
var scaling = new (require('blaast/scaling').Scaling)();

var siteUrl = url.parse("http://updaterus.com/index/at_time/");
var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();

console.log(jam);
console.log(menit);

var headers = {
    'Host': siteUrl.host,
    'X-Requested-With': 'XMLHttpRequest'
};
var site = http.createClient(siteUrl.port || 80, siteUrl.host);
var request = site.request('GET', siteUrl.pathname + jam + '/' + menit, headers);
console.log('Url : ' + siteUrl.pathname + jam + '/' + menit);
request.end();

var idUser = null;
var firstname = null;
var lastname = null;
var location = null;
var occupation = null;
var cute = null;
var hobby = null;
var twitter = null;
var facebook = null;
var birthday = null;
var follow = null;
var website = null;

request.on('response', function(response) {
    response.setEncoding('utf8');
    console.log('Status : ' + response.statusCode);
    response.on('data', function(data) {
        var dataJson = JSON.parse(data);

        idUser = dataJson.id;
        firstname = dataJson.firstname;
        lastname = dataJson.lastname;
        location = dataJson.location;
        occupation = dataJson.occupation;
        cute = dataJson.cute;
        hobby = dataJson.hobby;
        twitter = dataJson.twitter;
        facebook = dataJson.facebook;
        birthday = dataJson.birthday;
        follow = dataJson.follow;
        website = dataJson.website;

        console.log('id : ' + idUser);
        console.log('fitstname : ' + firstname);
        console.log('lastname : ' + lastname);
        console.log('location : ' + location);
        console.log('occupation : ' + occupation);
        console.log('cute : ' + cute);
        console.log('hobby : ' + hobby);
        console.log('twitter : ' + twitter);
        console.log('facebook : ' + facebook);
        console.log('birthday : ' + birthday);
        console.log('follow : ' + follow);
        console.log('website : ' + website);


        console.log('Data yang diterima : ' + data);
    });


});

app.setResourceHandler(function(request, response) {
    app.debug('Client request response-id : ' + request.id);
    function sendReply(response, error, imageType, data) {
        if (error) {
            app.warm('Failed to load image : ' + error);
            response.failed();
        }
        else {
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
    }
    else {
        resource.notFound();
    }


});

app.message(function(client, action, param) {
    if (action === 'getdetails') {
        console.log('getdetails : ' + param);

        request.on('response', function(response) {
            response.setEncoding('utf8');
            console.log('Status : ' + response.statusCode);
            response.on('data', function(data) {

                var dataJson = JSON.parse(data);

                param.idUser = dataJson.id;
                param.firstname = dataJson.firstname;
                param.lastname = dataJson.lastname;
                param.location = dataJson.location;
                param.occupation = dataJson.occupation;
                param.cute = dataJson.cute;
                param.hobby = dataJson.hobby;
                param.twitter = dataJson.twitter;
                param.facebook = dataJson.facebook;
                param.birthday = dataJson.birthday;
                param.follow = dataJson.follow;
                param.website = dataJson.website;


            });
        });

    }


});

log.info('Hello from backend bootstrap.');

