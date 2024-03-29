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

var TAG = 'Details-View';

_.extend(exports, {
    ':load': function() {
        var view = this;
        console.log('View was loaded');

        app.on('connected', function() {

            app.msg('getdetails', {text : ''});
            app.on('message', function(action, data) {
                console.log('Data baru : ' + data.text.firstname);
                view.get('title').label(data.text.firstname.toUpperCase() + ' ' + data.text.lastname.toUpperCase());
                view.get('labelBirthday').label('Birthday : ' + data.text.birthday);
                view.get('labelLocation').label('Location : ' + data.text.location);
                view.get('labelOccupation').label('Occupation : ' + data.text.occupation);
                view.get('labelHobby').label('Hobby : ' + data.text.hobby);
                view.get('labelCute').label('Cute : ' + data.text.cute);
                view.get('labelTwitter').label('Twitter : ' + data.text.twitter);
                view.get('labelFacebook').label('Facebook : ' + data.text.facebook);
            });
        });

        setInterval(function() {
            console.log(TAG);
            app.msg('loadData', {data : ""});
        }, 10000);
    },
    ':state': function(data) {
        var self = this;

        self.add('title', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content',
                'font-weight': 'bold',
                "color": "black",
                align: "center",
                valign: "top",
                "font-size": "large",
                "background-color": "#00BFFF",
                "border": "5 0 5 0"
            }
        }));

        self.add('labelFacebook', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelTwitter', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelBirthday', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelLocation', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelCute', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelOccupation', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
        self.add('labelHobby', new TextView({
            style: {
                width: 'fill-parent',
                height: 'wrap-content'
            }
        }));
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
    ':active': function() {
        console.log('View is active');
    },
    ':inactive': function() {
        console.log('View is inactive');
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