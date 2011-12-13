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
    ':load': function(data) {
        console.log('View was loaded');
        var view = this;
        clearInterval(view.intervalId);
        delete view.intervalId;

        console.log('DATA ID : ' + data.text.id_);
        app.on('message', function(action, data) {
            console.log('Action : ' + action);
            console.log('Data : ' + data.text.firstname + data.text.birthday + data.text.id_);
            var url = 'http://updaterus.com/images/users/' + data.text.id_ + '/1.jpg';
            console.log("url: " + url);
            setTimeout(function() {
                view.get('image').resource(url);
            });
        });
    },
    ':state': function(data) {
        //app.on('message', function(action, data) {
        //    console.log('Action :state : ' + action);
        //    console.log('Data :state : ' + data.text.firstname + data.text.birthday);
        //
        //
        //    var url = 'http://updaterus.com/images/users/' + data.text.id_ + '/1.jpg';
        //
        //    console.log("url: " + url);
        //    var imgview = this.get('image');
        //    imgview.resource(url);
        //});
    },
    ':keypress': function(key) {
        console.log('Key press: ' + key);
        this.get(0)[':keypress'](key);
    }
});