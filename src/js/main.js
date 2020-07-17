$(document).ready(function() {
    
    
     if ($('.navbar-burger').length) {
        $('.navbar-burger').on("click", function () {

            var menu_id = $(this).attr('data-target');
            $(this).toggleClass('is-active');
            $("#" + menu_id).toggleClass('is-active');
            $('.navbar.is-light').toggleClass('is-dark-mobile')
        });
    }

    if ($('#navbar-clone').length) {
        $(window).scroll(function () {
            var height = $(window).scrollTop();
            if (height > 50) {
                $("#navbar-clone").addClass('is-active');
            } else {
                $("#navbar-clone").removeClass('is-active');
            }
        });
    }





    $('#bt-modal').click(function() {
        $('#modal-page').css(
            {
                'display': 'block'
            }
        )
    });
  
    $('#close-modal').click(function() {
        $('#modal-page').css(
            {
                'display': 'none'
            }
        )    
    });

    $('.modal-background').click(function() {
        $('#modal-page').css(
            {
                'display': 'none'
            }
        )    
    });
});