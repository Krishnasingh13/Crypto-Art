var tl = gsap.timeline();

tl
    .from('#imgs', {
        scale: 0.4,
        duration: 2,
        opacity: 0,
        ease: Power2.easeInOut,
        stagger: 0.3
    })
    .from('#img img', {
        scale: 4,
        duration: 2,
        opacity: 0,
        ease: Power2.easeInOut,
    }, '-=2')
    .from('nav img', {
        scale: 0.2,
        duration: 1,
        opacity: 0,
        ease: Power2.easeInOut
    })
    .from('nav a', {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: Power2.easeInOut,
        stagger: 0.3
    })
    .to('h4', {
        opacity: 1,
        duration: 1,
        onStart: function () {
            $('.tlt').textillate({
                selector: '.texts',
                initialDelay: 0,
                autoStart: true,
                in: {
                    effect: 'fadeInUp',
                    delayScale: 1.5,
                    delay: 20,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                },
                type: 'char'
            });
        }
    }, '-=1.5')
    .to('h1', {
        opacity: 1,
        duration: 1,
        onStart: function () {
            $('.tlt2').textillate({
                selector: '.texts',
                initialDelay: 0,
                autoStart: true,
                in: {
                    effect: 'fadeInUp',
                    delayScale: 1.5,
                    delay: 20,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                },
                type: 'char'
            });
        }
    })
    .to('#text h5', {
        opacity: 1,
        duration: 1,
        onStart: function () {
            $('h5').textillate({
                selector: '.texts',
                initialDelay: 0,
                autoStart: true,
                in: {
                    effect: 'fadeInUp',
                    delayScale: 1.5,
                    delay: 20,
                    sync: false,
                    shuffle: false,
                    reverse: false,
                },
                type: 'word'
            });
        }
    })
    .to('#svgS', {
        strokeDashoffset: 0,
        duration:2
    })
    .to('#svgL', {
        strokeDashoffset: 0,
        duration:5
    },'-=1')
    .from('h6',{
        opacity: 0,
        duration:1,
        y:30
    },'-=4.5')





