import React from 'react';
import ReactDOM from 'react-dom';
import {Config} from "./config";

var $ = require('jquery');
// JS is equivalent to the normal "bootstrap" package
// no need to set this to a variable, just require it
require('bootstrap');
require('moment');

$(document).ready(function() {
    require('../../node_modules/bootstrap4-datetimepicker/build/js/bootstrap-datetimepicker.min');

    $('input.datetimepicker-input').datetimepicker({
        locale: 'fr',
        format: 'LLLL',
        icons: {
            time:     'fa fa-clock fa-3x',
            date:     'fa fa-calendar fa-3x',
            up:       'fa fa-chevron-up fa-3x',
            down:     'fa fa-chevron-down fa-3x',
            previous: 'fa fa-chevron-left fa-3x',
            next:     'fa fa-chevron-right fa-3x',
            today:    'fa fa-calendar-alt fa-3x',
            clear:    'fa fa-ban fa-3x',
            close:    'fa fa-times fa-3x'
        }
    });

    $('.form_rest_').click(function(e){
        let restForm = $(this);
        e.preventDefault();
        if (confirm(restForm.attr('data-message'))) {
            let formData = restForm.serializeArray();
            $.ajax({
                type: restForm.attr('method'),
                url: restForm.attr('action'),
                data: formData,
                success: function(r) {
                    window.location.href = restForm.attr('data-return');
                },
                error: function(e) { alert(e);}
            })
        }
    });
});