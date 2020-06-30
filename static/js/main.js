document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {
        alignment: 'left',
        coverTrigger: false
    });
    for (const obj of document.querySelectorAll('.custom-dropdown')) {
        for (const a of obj.querySelectorAll('a')) {
            a.innerHTML = '<span class="badge material-icons">keyboard_arrow_right</span>' + a.innerHTML;
        }
    }
    var carousel = M.Carousel.init(document.querySelectorAll('.carousel'), {
        fullWidth: true,
        indicators: true
    });

    var prevCarousel = document.querySelector('.custom-carousel .arrow_left');
    prevCarousel.onclick = () => {
        const inst_carousel = M.Carousel.getInstance(document.querySelector('.carousel'));
        inst_carousel.prev();
    };

    var nextCarousel = document.querySelector('.custom-carousel .arrow_right');
    nextCarousel.onclick = () => {
        const inst_carousel = M.Carousel.getInstance(document.querySelector('.carousel'));
        inst_carousel.next();
    };
});