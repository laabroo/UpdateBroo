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

//        this.get('image').src(app.resourceURL('logo.png'));
        var view = this;
        setTimeout(function() {
//            view.clear();
            view.get('image').resource('A');

        }, 500);

    },

    ':resized'
        :
        function(width, height) {
            console.log('View was resized to ' + width + 'x' + height);
        }

    ,

    ':keydown'
        :
        function(key) {
            console.log('Key down: ' + key);
        }

    ,

    ':keyup'
        :
        function(key) {
            console.log('Key up: ' + key);
        }

    ,

    ':keypress'
        :
        function(key) {
            console.log('Key press: ' + key);
            this.get(0)[':keypress'](key);
        }

    ,

    ':active'
        :
        function() {
            console.log('View is active');
        }

    ,

    ':inactive'
        :
        function() {
            console.log('View is inactive');
        }
});