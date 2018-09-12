    $(document).ready(function() {
        $('#tipue_search_input').tiles();
        $(document).scroll(function() {
            // Sticky search bar
            if ($(document).scrollTop() > 76) {
                $("#searchbar").addClass("active");
            } else {
                $("#searchbar").removeClass("active");
            }
        });
      
    });
$(window).load(function () {
    //FIND links that start with http

    $('a[href^="http"]').each(function () {

        // ADD GA tracking code to links
        $(this).attr('onclick', "ga('send', 'event', 'Outbound', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
        $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
        $(this).append('<span class="sr-only">opens in a new window</span>');
    });

    $('a[href^="https"]').each(function () {

        // ADD GA tracking code to links
        $(this).attr('onclick', "ga('send', 'event', 'Outbound', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
        $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
        $(this).append('<span class="sr-only">opens in a new window</span>');
    });

    $('a[href^="pdf/"]').each(function () {

        // ADD GA tracking code to links
        $(this).attr('onclick', "ga('send', 'event', 'PDF', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
        $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
        $(this).append('<span class="sr-only">opens in a new window</span>');
    });
    $('a[href^="video/"]').each(function () {

        // ADD GA tracking code to links
        $(this).attr('onclick', "ga('send', 'event', 'Video', 'Clicked', jQuery(this).attr('href'), {'nonInteraction': 1});");
        $(this).attr('target', '_blank'); // OPTIONAL: ADD target blank
        $(this).append('<span class="sr-only">opens in a new window</span>');
    });

 
});