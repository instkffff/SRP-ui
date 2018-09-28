import $ from 'jquery'
import 'bootstrap';
import './scss/app.scss';

require('./pic/abstract-outer-space-eve-online-1920x1080-wallpaper.jpg');

$(function() {
    $("#header").load("./includes/header.html");
    $("#footer").load("./includes/footer.html");
});

$('#myForm').on('submit', function(e){
  $('#myModal').modal('show');
  e.preventDefault();
});