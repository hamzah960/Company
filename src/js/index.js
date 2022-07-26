import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import '../sass/style.scss';
import '@fortawesome/fontawesome-free/js/all.min.js';

$(function(){
    $('.thumbnail2').hover(function(){
        
        $(this).find(".project-category").toggle();
        $(this).find(".caption2").slideToggle(300);
    });


    $("#date").text(new Date().getFullYear());



    // Start modal for Project Details

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
        $('#show-previous-image, #show-next-image')
        .show();
        if (counter_max === counter_current) {
            $('#show-next-image')
            .hide();
        } else if (counter_current === 1) {
        $('#show-previous-image')
            .hide();
        }
    }


    function loadGallery(setIDs, setClickAttr) {
        let current_image,
            selector,
            counter = 0;
        $('#show-next-image, #show-previous-image')
        .on ('click',function () {
            if ($(this)
                .attr('id') === 'show-previous-image') {
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title')
            .text($sel.data('title'));
            $('#image-gallery-image')
            .attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if (setIDs == true) {
            $('[data-image-id]')  //array of a.thumbnail elements
            .each(function () {      //loop
                counter++;
                $(this)
                .attr('data-image-id', counter);    // set value for data image id
            });
        }

        $(setClickAttr)                       //a.thumbnail click
            .on('click', function () {
            updateGallery($(this));
            });
    }

    // End modal for Project Details

    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
});
