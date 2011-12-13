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

var TAG = "homeView";

_.extend(exports, {
    ':load': function() {
        console.log('View was loaded');
        var view = this;
        clearInterval(view.intervalId);
        delete view.intervalId;

        app.view('homeView').on('load', function() {
            console.log(TAG + ' : ---------------- *******************  -------------------');
            app.msg('getdetails', text);
            app.on('message', function(action, data) {
                var url = 'http://updaterus.com/images/users/' + data.text.id_ + '/1.jpg';
                console.log("url: " + url);
                setTimeout(function() {
                    view.get('image').resource(url);
                }, 500);
            });
        });
        console.log('DATA ID : ' + data.text.id_);

    },
    ':state': function(data) {

        console.log('DATA ID : ' + data.text.id_);
        app.on('message', function(action, data) {
            var url = 'http://updaterus.com/images/users/' + data.text.id_ + '/1.jpg';
            console.log("url: " + url);
            setTimeout(function() {
                view.get('image').resource(url);
            }, 500);
        });


    },
    ':keypress': function(key) {
        console.log('Key press: ' + key);
        this.get(0)[':keypress'](key);

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
            this.get(this.index).emit('activate');
        } else if (key === 'back') {
            console.log('back');
        }

    },
    
    focusItem: function(index) {
		if (this.index !== undefined) {
			this.get(this.index).emit('blur');
		}
		this.index = index;
		this.get(index).emit('focus');
		if (index === 1) {
			this.scrollTop(0);
		}
		console.log(index);
		this.scrollTo(index);
	}
});