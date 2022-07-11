import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

$(document).ready(function(){
    $('.thumbnail2').hover(function(){
        
        $(this).find(".project-category").toggle();
        $(this).find(".caption2").slideToggle(300);
    });


    $("#date").text(new Date().getFullYear());
});
