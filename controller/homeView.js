var _ = require('common/util');
var ui = require('ui');
var TextView = ui.TextView;
var InputBox = ui.InputBox;
var ImageView = ui.ImageView;
var Panels = require('ui/panels').Panels;

//Container
var HLayout = ui.HLayout;
var VLayout = ui.VLayout;
var CellLayout = ui.CellLayout;

_.extend(exports, {
    ':load': function() {
        console.log('View was loaded');
        var view = this;
        setTimeout(function() {
            view.get('image').resource('A');

        }, 500);

        app.on('message', function(action, data) {
            console.log('Action : ' + action);
            console.log('Data : ' + data.text.firstname + data.text.birthday);
            //app.setContent('detailsView', {
            //    firstname: data.text.firstname,
            //    lastname: data.text.lastname,
            //    birthday: data.text.birthday,
            //    location: data.text.location,
            //    occupation: data.text.occupation,
            //    hobby: data.text.hobby,
            //    cute: data.text.cute,
            //    facebook: data.text.facebook,
            //    twitter: data.text.twitter
            //
            //});

        });


    },
    ':state': function(data) {

    },

    ':keypress': function(key) {
        console.log('Key press: ' + key);
        this.get(0)[':keypress'](key);

    }


});