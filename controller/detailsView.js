var _ = require('common/util');
var ui = require('ui');
var TextView = ui.TextView;
var InputBox = ui.InputBox;
var ImageView = ui.ImageView;
var Panels = require('ui/panels').Panels;
var app = this;

//Container
var HLayout = ui.HLayout;
var VLayout = ui.VLayout;
var CellLayout = ui.CellLayout;

_.extend(exports, {
    ':load': function() {
        var view = this;
        console.log('View was loaded');

        app.view('detailsView').on('load', function() {
            console.log('----------------- *******************  -------------------');


            app.msg('getdetails', text);
            console.log('Pesan yang dikirim : ' + app.msg('getdetails'));
        });

    },
    ':state': function(data) {
        var self = this;

        console.log('Firstname : ' + data.firstname);
        console.log('Lastname : ' + data.lastname);
        console.log('Birthday : ' + data.birthday);
        console.log('Location : ' + data.location);
        console.log('Occupation : ' + data.occupation);
        console.log('Hobby : ' + data.hobby);
        console.log('Cute : ' + data.cute);
        console.log('Twitter : ' + data.twitter);
        console.log('Facebook : ' + data.facebook);

        self.get('title').label(data.firstname + ' ' + data.lastname);
        self.get('labelBirthday').label('Birthday : ' + data.birthday);
        self.get('labelLocation').label('Location : ' + data.location);
        self.get('labelOccupation').label('Occupation : ' + data.occupation);
        self.get('labelHobby').label('Hobby : ' + data.hobby);
        self.get('labelCute').label('Cute : ' + data.cute);
        self.get('labelTwitter').label('Twitter : ' + data.twitter);
        self.get('labelFacebook').label('Facebook : ' + data.facebook);

    },

    ':keypress': function(key) {
        console.log('Key press: ' + key);

    },

    ':active': function() {
        console.log('View is active');
    },

    ':inactive': function() {
        console.log('View is inactive');
    }
});