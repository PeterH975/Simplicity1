// SLIDE IN ANIMATION FOR SECTIONS
// Based on code from https://codepen.io/amandabtch/pen/YdvZdv
// Interactivity to determine when an animated element in in view. In view elements trigger our animation

$(document).ready(function() {

    // Window and animation elements
    var animation_elements = $.find(".intro, .resume, .projects, .contact, .footer");
    var web_window = $(window);

    // Check to see if any animation containers are currently in view
    function checkIfInView() {

        // Get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        // Iterate through elements to see if its in view
        $.each(animation_elements, function() {

            // Get the element information
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            // Check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass("in-view");
            // Remove class once out of view
            //} else {
                //element.removeClass("in-view");
            }
        });

    }

    // On or scroll, detect elements in view
    $(window).on("scroll resize", function() {
        checkIfInView();
    })

    // Trigger scroll event on initial load
    $(window).trigger("scroll");

});


// FUNCTION TO ACTIVATE MOBILE HEADER MENU
function activateHeaderMenu() {
    var x = document.getElementById("mobile-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// FUNCTION TO ACTIVATE MOBILE FOOTER MENU
function activateFooterMenu() {
    var x = document.getElementById("mobile-footer-links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// FUNCTION TO CLOSE MOBILE MENUS WHEN LINK CLICKED
function closeMobileMenu() {
    var x = document.getElementById("mobile-links");
    x.style.display = "none";
    x = document.getElementById("mobile-footer-links");
    x.style.display = "none";
}


