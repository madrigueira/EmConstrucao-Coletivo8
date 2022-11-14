
var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    smartBackspace: true,
    typeSpeed: 120,
    showCursor: true,
    cursorChar: '|',
    startDelay: 100,
})

var typed = new Typed('#typed-2',{
    stringsElement: '#typed-strings-2',
    smartBackspace: true,
    typeSpeed: 120,
    showCursor: true,
    cursorChar: '|',
})

var typed = new Typed('#typed-3',{
    stringsElement: '#typed-strings-3',
    smartBackspace: true,
    typeSpeed: 120,
    showCursor: true,
    cursorChar: '!',
})

var typed = new Typed('#typed-4',{
    stringsElement: '#typed-strings-4',
    smartBackspace: true,
    typeSpeed: 250,
    showCursor: true,
    cursorChar: '|',
    loop: true,
    loopCount: Infinity,
    backDelay: 1250,
})

$(window).scroll(function () {
    var $this = $(this),
        $head = $('#body');
    if ($this.scrollTop() > 5800) {
       $head.addClass('active');
    }
});

if (window.matchMedia("(max-width:800px)").matches) {
    $(window).scroll(function () {
        var $this = $(this),
            $head = $('#body');
        if ($this.scrollTop() > 3000) {
           $head.addClass('active');
        }
    });
}