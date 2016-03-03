'use strict';
window.requestAnimFrame = (function(){ 
    return window.requestAnimationFrame || //Chromium
        window.webkitRequestAnimationFrame || //Webkit
        window.mozRequestAnimationFrame || //Mozilla
        window.oRequestAnimationFrame || //Opera
        window.msRequestAnimationFrame || //IE
        function(callback){ 
            window.setTimeout(callback, 1000 / 60); 
        };
})();
window.fps=30;
(function(){
    var picTime=[6000,17000,31000,40500,54600,58600,82000,122000,137500,159300];
    var picTimer=[];
    var flag=true;
    var firework;
    $('document').ready(function(){
        $('#main-typed').typed({
            stringsElement: $('.profile'),
            typeSpeed:10,
            showCursor:false
        });
        $('#block-skill').on('click',function(){
            showContent(0);
        });
        $('#block-about').on('click',function(){
            showContent(1);
        });
        $('#block-project').on('click',function(){
            $('.mycanvas').addClass('active');
            showContent(2);
        });
        $('#block-work').on('click',function(){
            showContent(3);
        });
        $('.return-btn').on('click',function(){
            $('.mycanvas').removeClass('active');
            $('.icon-block').removeClass('active');
            $('.word-small-block').removeClass('active');
            $('.page').removeClass('active');
            $('.skill-block').removeClass('active');
            $(this).removeClass('active');
            $('.content-div-container').removeClass().addClass('content-div-container');
            $('.work-block').removeClass('active');
        });
        $('.list-div li').each(function(index){
            $(this).on('click',function(){
                $('.content-div-container').removeClass().addClass('content-div-container').addClass('active'+index);
            });
        });
        
        //--------firework-----------
        $(window).on('mousemove',function(e){
            firework.curPos.setVector(e.pageX,e.pageY);
        });

        firework = new FireworkManager();
        document.addEventListener('keydown', function (event) {
            var modifiers = event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;//加了這些key就不行
            if (!modifiers) {
                if (fireworkMap[event.which] !== undefined) {
                    event.preventDefault();
                    firework.shoot(fireworkMap[event.which][0]);
                }
            }
        });
        $('.mycanvas').attr('height',$(window).height());
        $('.mycanvas').attr('width',$(window).width());
        firework.$canvas=$('.mycanvas');
        firework.ctx=$('.mycanvas').get(0).getContext('2d');
        Firework1.prototype.ctx=firework.ctx;
        Firework2.prototype.ctx=firework.ctx;
        FireworkPoint.prototype.ctx=firework.ctx;
        draw();
        //--------firework-----------
    });
    function draw(){
        if(flag===true){
            firework.init();
            flag=false;
        }
        else
            flag=true;
        window.requestAnimFrame(draw);
    }
    function showContent(page){//0 1 2 3 skill about career job
        $('.icon-block').addClass('active');
        $('.word-small-block').addClass('active');
        $('.return-btn').addClass('active');
        setTimeout(function(){
            if(page===0)
                showPageSkill();
            else if(page===1)
                showPageAbout();
            else if(page===2)
                showPageProject();
            else if(page===3)
                showPageWork();
        },2600);
    }

    function showPageSkill(){
        $('#page-skill').addClass('active');
        $('.chart').empty();
        $('.skill-block').addClass('active');
        setTimeout(function(){drawBarChart(data.web1,'#chart-web1');},0);
        setTimeout(function(){drawBarChart(data.web2,'#chart-web2');drawBarChart(data.other,'#chart-other');},1200);
        setTimeout(function(){drawBarChart(data.cs,'#chart-cs');},2400);
    }
    function showPageAbout(){
        $('#page-about').addClass('active');
        $('.story').removeClass('active');
        $('.mark').removeClass('active');
        picTimer.forEach(function(element){
            clearTimeout(element);
        });
        $('#page-about-type-span').remove();
        $('div.about-words').after('<span id="page-about-type-span">');
        $('#page-about-type-span').typed({
            stringsElement: $('.about-words'),
            typeSpeed:100,
            showCursor:false
        });
        picTimer[picTime.length]=setTimeout(function(){
            $('#page-skill').removeClass('active');
            $('.mark').addClass('active');
        },picTime[picTime.length-1]);
        picTime.forEach(function(element,value){
            picTimer[value]=setTimeout(function(){
                $('.story').eq(value).addClass('active');
                if(value!==picTime.length)
                    $('.story').eq(value-1).removeClass('active');
            },element);
        });
    }
    function showPageProject(){
        $('#page-project').addClass('active');
    }
    function showPageWork(){
        $('#page-work').addClass('active');
        $('.work-block').addClass('active');
    }
    function drawBarChart(dataBar,container){
        var margin={
            top: 10, 
            left: 150,
            right: 50, 
            bottom: 20
        };  
        var bar=barChart().data(dataBar).container(container).margin(margin).barMargin(25).barHeight(40).barStyle(function(it){
            return it.style({
                'fill':function(it){
                    if(data.other.indexOf(it)!==-1)
                        return '#FFA400';
                    else if(data.cs.indexOf(it)!==-1)
                        return '#00FFFF';
                    else
                        return '#0CE30C';
                }   
            }); 
        }); 
        bar();
        bar.draw();
    }

    var data={
        web1:[
        {key:'html5',value:5},
        {key:'css3',value:5},
        {key:'Reactjs',value:5},
        {key:'Sass',value:5},
        {key:'Jquery',value:5},
        {key:'JSON',value:5},
        {key:'AJAX',value:4},
        {key:'Gulp',value:4},
        {key:'Git',value:4},
        {key:'canvas',value:4}
        ],
        web2:[
        {key:'JS/ES6',value:3},
        {key:'RWD',value:3},
        {key:'Jade',value:3},
        {key:'Bootstrap',value:2},
        {key:'Nodejs',value:1},
        {key:'D3.js',value:1},
        {key:'Mongodb',value:1}
        ],
        other:[
        {key:'physics',value:4},
        {key:'UI/UX',value:3},
        {key:'Inkscape',value:1}
        ],
        cs:[
        {key:'vim',value:5},
        {key:'Ubuntu',value:4},
        {key:'Android',value:4},
        {key:'Linux',value:3},
        {key:'C',value:3},
        {key:'C++',value:3},
        {key:'Assembly',value:2},
        {key:'Python',value:1}
        ]
    };

    var fireworkMap={//keycode to ascii code
        //0~9
        48:[0,48], //keycode:[type,ascii code]
        49:[1,49], 
        50:[2,50],
        51:[3,51],
        52:[4,52],
        53:[5,53],
        54:[6,54],
        55:[7,55],
        56:[8,56],
        57:[9,57],

        96:[0,48],
        97:[1,49],
        98:[2,50],
        99:[3,51],
        100:[4,52],
        101:[5,53],
        102:[6,54],
        103:[7,55],
        104:[8,56],
        105:[9,57],

        65:[10,97],
        66:[11,98],
        67:[12,99],
        68:[13,100],
        69:[14,101],
        70:[15,102],
        71:[16,103],
        72:[17,104],
        73:[18,105],
        74:[19,106],
        75:[20,107],
        76:[21,108],
        77:[22,109],
        78:[23,110],
        79:[24,111],
        80:[25,112],
        81:[26,113],
        82:[27,114],
        83:[28,115],
        84:[29,116],
        85:[30,117],
        86:[31,118],
        87:[32,119],
        88:[33,120],
        89:[34,121],
        90:[35,122]
    };
})(window);
