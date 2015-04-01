(function(compId) {
    var _ = null,
        y = true,
        n = false,
        zy = 'scaleY',
        rz = 'rotateZ',
        x25 = 'rgba(255,255,255,0.00)',
        x2 = '5.0.0',
        x6 = 'rgba(0,0,0,0)',
        x4 = 'both',
        e30 = '${desktop-feature}',
        e34 = '${facebook-green2}',
        e52 = '${desktop-frame3}',
        e39 = '${facebook-map}',
        e47 = '${facebook-phone2}',
        e28 = '${facebook-text32Copy}',
        e51 = '${desktop-map2}',
        e42 = '${facebook-map2}',
        e31 = '${facebook-red2}',
        e36 = '${facebook-text32}',
        e32 = '${desktop-logo}',
        e43 = '${facebook-text322}',
        x5 = 'horizontal',
        e49 = '${facebook-time2}',
        e48 = '${facebook-phone}',
        e46 = '${desktop-overlay}',
        x3 = '5.0.1.386',
        e26 = '${facebook-red}',
        o = 'opacity',
        lf = 'left',
        e27 = '${facebook-blue2}',
        e44 = '${facebook-text32Copy2}',
        e50 = '${facebook-time}',
        e41 = '${load}',
        e40 = '${facebook-green}',
        e38 = '${desktop-phone}',
        tp = 'top',
        bp = 'background-position',
        x37 = '@@0@@% @@1@@%',
        e33 = '${desktop-nav}',
        e29 = '${facebook-text322Copy2}',
        e35 = '${facebook-blue}',
        x1 = '5.0.1',
        g = 'image',
        e45 = '${facebook-text322Copy}',
        zx = 'scaleX';
    var g8 = 'facebook-frame.svg',
        g13 = 'facebook-map.png',
        g21 = 'desktop-feature.png',
        g24 = 'desktop-map2.png',
        g12 = 'facebook-green.svg',
        g20 = 'desktop-nav.svg',
        g17 = 'facebook-logo.png',
        g19 = 'desktop-logo.svg',
        g7 = 'desktop-frame.svg',
        g23 = 'desktop-phone.svg',
        g15 = 'facebook-phone.png',
        g14 = 'facebook-time.png',
        g9 = 'facebook-feature.png',
        g22 = 'desktop-overlay.svg',
        g11 = 'facebook-blue.svg',
        g10 = 'facebook-red.svg',
        g18 = 'load.svg',
        g16 = 'facebook-text32.svg';
    var im = AdobeEdge.proxy + 'images/',
        aud = 'media/',
        vid = 'media/',
        js = 'js/',
        fonts = {},
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [],
        scripts = [],
        symbols = {
            "stage": {
                v: x1,
                mv: x2,
                b: x3,
                stf: x4,
                cg: x5,
                rI: n,
                cn: {
                    dom: [{
                        id: 'desktop-frame2',
                        t: g,
                        r: ['208px', '3px', '681px', '604px', 'auto', 'auto'],
                        f: [x6, im + g7, '0px', '0px']
                    }, {
                        id: 'facebook-frame2',
                        t: g,
                        r: ['15px', '87px', '279px', '425px', 'auto', 'auto'],
                        f: [x6, im + g8, '0px', '0px']
                    }, {
                        id: 'facebook-feature',
                        t: g,
                        r: ['15px', '134px', '278px', '166px', 'auto', 'auto'],
                        f: [x6, im + g9, '0px', '0px']
                    }, {
                        id: 'facebook-red',
                        t: g,
                        r: ['30px', '315px', '41px', '41px', 'auto', 'auto'],
                        f: [x6, im + g10, '0px', '0px'],
                        tf: [
                            [],
                            [],
                            [],
                            ['0', '0']
                        ]
                    }, {
                        id: 'facebook-blue',
                        t: g,
                        r: ['31px', '384px', '41px', '41px', 'auto', 'auto'],
                        f: [x6, im + g11, '0px', '0px']
                    }, {
                        id: 'facebook-green',
                        t: g,
                        r: ['31px', '455px', '41px', '41px', 'auto', 'auto'],
                        f: [x6, im + g12, '0px', '0px']
                    }, {
                        id: 'facebook-map2',
                        t: g,
                        r: ['41px', '324px', '17px', '22px', 'auto', 'auto'],
                        f: [x6, im + g13, '0px', '0px']
                    }, {
                        id: 'facebook-time',
                        t: g,
                        r: ['40px', '391px', '24px', '24px', 'auto', 'auto'],
                        f: [x6, im + g14, '0px', '0px']
                    }, {
                        id: 'facebook-phone',
                        t: g,
                        r: ['43px', '466px', '19px', '20px', 'auto', 'auto'],
                        f: [x6, im + g15, '0px', '0px']
                    }, {
                        id: 'facebook-text322',
                        t: g,
                        r: ['88px', '326px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-text322Copy',
                        t: g,
                        r: ['88px', '395px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-text322Copy2',
                        t: g,
                        r: ['88px', '466px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-logo2',
                        t: g,
                        r: ['30px', '99px', '96px', '21px', 'auto', 'auto'],
                        f: [x6, im + g17, '0px', '0px']
                    }, {
                        id: 'desktop-frame3',
                        t: g,
                        r: ['208px', '3px', '681px', '604px', 'auto', 'auto'],
                        f: [x6, im + g7, '0px', '0px']
                    }, {
                        id: 'load',
                        t: g,
                        r: ['493px', '244px', '111px', '112px', 'auto', 'auto'],
                        o: '0.45334730691057',
                        f: [x6, im + g18, '0px', '0px']
                    }, {
                        id: 'desktop-logo',
                        t: g,
                        r: ['247px', '17px', '36px', '35px', 'auto', 'auto'],
                        f: [x6, im + g19, '0px', '0px']
                    }, {
                        id: 'desktop-nav',
                        t: g,
                        r: ['622px', '32px', '233px', '6px', 'auto', 'auto'],
                        f: [x6, im + g20, '0px', '0px']
                    }, {
                        id: 'desktop-feature',
                        t: g,
                        r: ['208px', '67px', '75.6%', '58.2%', 'auto', 'auto'],
                        f: [x6, im + g21, '50%', '50%', '680px', '355px', 'no-repeat']
                    }, {
                        id: 'desktop-overlay',
                        t: g,
                        r: ['208px', '331px', '681px', '91px', 'auto', 'auto'],
                        f: [x6, im + g22, '0px', '0px']
                    }, {
                        id: 'facebook-green2',
                        t: g,
                        r: ['247px', '348px', '55px', '55px', 'auto', 'auto'],
                        f: [x6, im + g12, '0px', '0px']
                    }, {
                        id: 'facebook-phone2',
                        t: g,
                        r: ['263px', '363px', '24px', '25px', 'auto', 'auto'],
                        f: [x6, im + g15, '0px', '0px']
                    }, {
                        id: 'desktop-phone',
                        t: g,
                        r: ['321px', '363px', '228px', '21px', 'auto', 'auto'],
                        f: [x6, im + g23, '0px', '0px']
                    }, {
                        id: 'desktop-map2',
                        t: g,
                        r: ['275', '476', '233px', '125px', 'auto', 'auto'],
                        f: [x6, im + g24, '0px', '0px']
                    }, {
                        id: 'facebook-blue2',
                        t: g,
                        r: ['555px', '455', '55px', '55px', 'auto', 'auto'],
                        f: [x6, im + g11, '0px', '0px']
                    }, {
                        id: 'facebook-time2',
                        t: g,
                        r: ['567px', '467px', '31px', '30px', 'auto', 'auto'],
                        f: [x6, im + g14, '0px', '0px']
                    }, {
                        id: 'facebook-red2',
                        t: g,
                        r: ['247px', '455', '55px', '55px', 'auto', 'auto'],
                        f: [x6, im + g10, '0px', '0px']
                    }, {
                        id: 'facebook-text32',
                        t: g,
                        r: ['622px', '472px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-text32Copy',
                        t: g,
                        r: ['622px', '510px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-text32Copy2',
                        t: g,
                        r: ['622px', '549px', '132px', '19px', 'auto', 'auto'],
                        f: [x6, im + g16, '0px', '0px']
                    }, {
                        id: 'facebook-map',
                        t: g,
                        r: ['265px', '470px', '19px', '25px', 'auto', 'auto'],
                        f: [x6, im + g13, '0px', '0px']
                    }],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            r: ['null', 'null', '900px', '610px', 'auto', 'auto'],
                            zr: ['', '900px', '', ''],
                            overflow: 'hidden',
                            f: [x25]
                        }
                    }
                },
                tt: {
                    d: 6386,
                    a: y,
                    data: [
                        ["eid9", zx, 0, 627, "linear", e26, '0', '1.3'],
                        ["eid14", zx, 627, 94, "linear", e26, '1.3', '1'],
                        ["eid200", o, 5250, 500, "linear", e27, '0', '1'],
                        ["eid207", o, 5565, 500, "linear", e28, '0', '1'],
                        ["eid82", tp, 798, 0, "linear", e29, '466px', '466px'],
                        ["eid183", lf, 3500, 0, "linear", e30, '208px', '208px'],
                        ["eid205", o, 4401, 500, "linear", e31, '0', '1'],
                        ["eid181", o, 2500, 500, "linear", e32, '0', '1'],
                        ["eid186", o, 2500, 500, "linear", e33, '0', '1'],
                        ["eid191", lf, 4401, 0, "linear", e34, '247px', '247px'],
                        ["eid18", zy, 285, 622, "linear", e35, '0', '1.3'],
                        ["eid19", zy, 907, 93, "linear", e35, '1.3', '1'],
                        ["eid77", zx, 570, 430, "linear", e29, '0', '1'],
                        ["eid206", o, 5250, 500, "linear", e36, '0', '1'],
                        ["eid16", zx, 285, 622, "linear", e35, '0', '1.3'],
                        ["eid17", zx, 907, 93, "linear", e35, '1.3', '1'],
                        ["eid216", bp, 6386, 0, "linear", e30, [50, 50],
                            [50, 50], {
                                vt: x37
                            }
                        ],
                        ["eid199", o, 3901, 500, "linear", e38, '0', '1'],
                        ["eid182", o, 3000, 500, "linear", e30, '0', '1'],
                        ["eid209", o, 4401, 500, "linear", e39, '0', '1'],
                        ["eid20", zx, 570, 593, "linear", e40, '0', '1.3'],
                        ["eid21", zx, 1161, 89, "linear", e40, '1.3', '1'],
                        ["eid176", o, 0, 0, "linear", e41, '0.45334730691057', '0.45334730691057'],
                        ["eid180", o, 2000, 500, "linear", e41, '1', '0'],
                        ["eid127", rz, 0, 285, "linear", e42, '0deg', '360deg'],
                        ["eid75", zx, 0, 500, "linear", e43, '0', '1'],
                        ["eid208", o, 5886, 500, "linear", e44, '0', '1'],
                        ["eid76", zx, 285, 436, "linear", e45, '0', '1'],
                        ["eid184", lf, 3750, 0, "linear", e46, '208px', '208px'],
                        ["eid190", o, 3901, 500, "linear", e34, '0', '1'],
                        ["eid193", o, 3901, 500, "linear", e47, '0', '1'],
                        ["eid22", zy, 570, 593, "linear", e40, '0', '1.3'],
                        ["eid23", zy, 1161, 89, "linear", e40, '1.3', '1'],
                        ["eid185", o, 3250, 500, "linear", e46, '0', '1'],
                        ["eid129", rz, 570, 285, "linear", e48, '0deg', '360deg'],
                        ["eid11", zy, 0, 627, "linear", e26, '0', '1.3'],
                        ["eid15", zy, 627, 94, "linear", e26, '1.3', '1'],
                        ["eid187", lf, 4000, 0, "linear", e32, '247px', '247px'],
                        ["eid203", o, 5250, 500, "linear", e49, '0', '1'],
                        ["eid128", rz, 285, 285, "linear", e50, '0deg', '360deg'],
                        ["eid201", o, 4401, 500, "linear", e51, '0', '1'],
                        ["eid188", tp, 4000, 0, "linear", e32, '17px', '17px'],
                        ["eid97", o, 2000, 500, "linear", e52, '0', '1'],
                        ["eid175", rz, 0, 2500, "linear", e41, '0deg', '360deg']
                    ]
                }
            }
        };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-315105869");
(function($, Edge, compId) {
    var Composition = Edge.Composition,
        Symbol = Edge.Symbol;
    Edge.registerEventBinding(compId, function($) {
        //Edge symbol: 'stage'
        (function(symbolName) {})("stage");
        //Edge symbol end:'stage'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-315105869");