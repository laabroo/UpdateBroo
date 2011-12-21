var _ = require('common/util');
var ui = require('ui');
var TextView = ui.TextView;
var InputBox = ui.InputBox;
var ImageView = ui.ImageView;
var Panels = require('ui/panels').Panels;
//Container
var Control = require('ui').Control;
var HLayout = ui.HLayout;
var VLayout = ui.VLayout;
var CellLayout = ui.CellLayout;

var TAG = "homeView";

_.extend(exports, {
    ':load': function() {
        console.log('View was loaded');
        var view = this;
        var url = "";
        clearInterval(view.intervalId);
        delete view.intervalId;
        app.on('connected', function () {
            app.msg('getdetails', {data : ""});
            app.on('message', function(action, data) {
                if (action === 'getdetails') {
                    console.log('ID User : ===> ' + data.text.id_);
                    console.log('Jumlah Photo : ===> ' + data.text.photos);
                    var nPhoto = data.text.photos;
                    for (var i = 1; i <= nPhoto; i++) {
                        url = 'http://updaterus.com/images/users/' + data.text.id_ + '/' + i + '.jpg';
                        view.get('image').resource(url);
                    }
                    url = null;
                }
            });
        });

        setInterval(function() {
            app.msg('getdetails', {data : ""});
        }, 20000);
    },
    ':state': function(data) {

    },
    ':keypress': function(key) {
        console.log('Key press: ' + key);
        // this.get(0)[':keypress'](key);
        if (this.index === undefined) {
            if (this.size() > 0) {
                this.focusItem(1);
            }
        } else if (key === 'up' || key === 'down') {
            var next = this.index + (key === 'up' ? -1 : 1);

            if (next < 1) {
                next = 1;
            } else if (next > (this.size() - 1)) {
                next = this.size() - 1;
            }

            if (this.index === next) {
                return;
            }

            this.focusItem(next);
        } else if (key === 'fire') {
            //this.get(this.index).emit('activate');
            console.log(key);
        } else if (key === 'back') {
            console.log('back');
        }

    },

    focusItem: function(index) {
        if (this.index !== undefined) {
            this.get(this.index).emit('blur');
        }
        this.index = index;
        //this.get(index).emit('focus');
        if (index === 1) {
            this.scrollTop(0);
        }
        console.log(index);
        this.scrollTo(index);
    }
});