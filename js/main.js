jQuery(function ($) {
    let dropDownMenus = $('.menu-container li:has("ul")');
    dropDownMenus.mouseenter(function (event) {
        $(event.delegateTarget.lastElementChild).stop().fadeTo(250, 1);
    });
    dropDownMenus.mouseleave(function (event) {
        $(event.delegateTarget.lastElementChild).stop().fadeOut(100);
    });

    let services = $('.services-container .service-item');

    services.hover(function (event) {
        $('i.service-ico', event.delegateTarget)
            .animate({
            'font-size': 20
        }, 200, 'linear')
    }, function (event) {
        $('i.service-ico', event.delegateTarget)
            .animate({
                'font-size': 48
            }, 200, 'linear');
    })
});