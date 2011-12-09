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
//var labelName = null;
//var textName = null;

_.extend(exports, {
    ':load': function() {
        var view = this;
        console.log('View was loaded');

        app.view('detailsView').on('load',function(){
            console.log('----------------- *******************  -------------------');
       
   
           app.msg('getdetails', text);
           console.log('Pesan yang dikirim : '+app.msg('getdetails'));
           });
        
        app.on('message', function(action, data) {
            console.log(action);
            if (action === 'setdetails') {

                view.get('labelName').label(data.text.firstname);
                //console.log('param first : ' + param.param.firstname);
                //view.get('labelFacebook').label(param.facebook);
                //view.get('labelTwitter').label(param.twitter);
                //view.get('labelBirthday').label(param.birthday);
                //view.get('labelLocation').label(param.location);
                //view.get('labelCute').label(param.cute);
                //view.get('labelOccupation').label(param.occupation);
                //view.get('labelhobby').label(param.hobby);
                //view.get('labelhobby').label('tes');

                view.add(this);
            }
        });


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