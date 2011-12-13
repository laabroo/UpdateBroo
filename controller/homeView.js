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
        clearInterval(view.intervalId);
        delete view.intervalId;
        setTimeout(function() {
            view.get('image').resource('A');

        }, 500);

        app.on('message', function(action, data) {
            console.log('Action : ' + action);
            console.log('Data : ' + data.text.firstname + data.text.birthday);

        });
    },
    ':state': function(data) {},
    ':keypress': function(key) {
        console.log('Key press: ' + key);
        this.get(0)[':keypress'](key);
    }
});