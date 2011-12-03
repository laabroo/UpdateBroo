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
var labelName = null;
var textName = null;

_.extend(exports, {
    ':load': function() {
        var view = this;
        console.log('View was loaded');
        app.on('message', function(action, param) {
            if (action === 'getdetails') {

                view.get('labelName').label(param.firstname);
                console.log('param first : '+param.firstname);
                view.get('labelFacebook').label(param.facebook);
                view.get('labelTwitter').label(param.twitter);
                view.get('labelBirthday').label(param.birthday);
                view.get('labelLocation').label(param.location);
                view.get('labelCute').label(param.cute);
                view.get('labelOccupation').label(param.occupation);
                view.get('labelhobby').label(param.hobby);
                view.get('labelhobby').label('tes');

                view.add(this);
            }
        });


    },

    ':resized': function(width, height) {
        console.log('View was resized to ' + width + 'x' + height);
    },

    ':keydown': function(key) {
        console.log('Key down: ' + key);
    },

    ':keyup': function(key) {
        console.log('Key up: ' + key);
    },

    ':keypress': function(key) {
        console.log('Key press: ' + key);
        this.get(0)[':keypress'](key);
    },

    ':active': function() {
        console.log('View is active');
    },

    ':inactive': function() {
        console.log('View is inactive');
    }
});