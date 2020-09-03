'use strict';
$(function () {
    if (!window.staticContent) {
        window.staticContent = '/static';
    }
});

(function () {

    var ItxMainComponent = {

        controller: ItxMainComponentCtrl,
        templateUrl: 'main.component.html'
    };


    ItxMainComponentCtrl.$inject = [
        'Category',
        'mdLoaderService',
        'imMicrositeService',
        'itxAkamaiSvc',
        'mdUtils',
        'BundleSvc',
        'ngDialog',
        'ItxConstants',
        'ItxUtilsFct',
        'ItxStaticResourceSvc',
        'timestampSvc',
        'ItxScreenSizeSvc',
        'cmsLookbookSvc',
    ];

    function ItxMainComponentCtrl(
        Category,
        mdLoaderService,
        imMicrositeService,
        itxAkamaiSvc,
        mdUtils,
        BundleSvc,
        ngDialog,
        ItxConstants,
        ItxUtilsFct,
        ItxStaticResourceSvc,
        timestampSvc,
        ItxScreenSizeSvc,
        cmsLookbookSvc,
    ) {
        var _this = this;
        console.log('sss')
        _this.$onInit = function () {
            console.log('onInit')
            _this.getInfo();
            inditex.onReady(function() {

                // Añadimos las clases al body para activar el modo Ghost
                _this.activeGhostMode();

                // Ocultamos el cargador
                mdLoaderService.hide();

                // Obtenemos los datos para pasarlos a la vista

                imMicrositeService.sendPageview();

                // we load fragment s microsite
                function getEl(element){return document.querySelector(".dallonses ".concat(element))}function getAllElements(elements){return document.querySelectorAll(".dallonses ".concat(elements))}var controller=new ScrollMagic.Controller,desktopMenu=1280<=window.innerWidth?70:50,topTriggerHook=desktopMenu/(window.innerHeight/100)/100,gridScenes=[];function addGridAnimations(type){0<gridScenes.length&&(gridScenes.forEach(function(scene){scene.destroy()}),gridScenes=[]),getAllElements(".section2 .gridType.".concat(type)).forEach(function(grid){grid.querySelectorAll(".row").forEach(function(row,i){var rowAnimation=new ScrollMagic.Scene({triggerElement:row,triggerHook:.8}).setTween(gsap.fromTo(row.children,{opacity:0},{opacity:1,duration:.4,stagger:.5})).addTo(controller);gridScenes.push(rowAnimation)})})}function startAnimation(){var videoHeight;window.innerWidth<768&&(videoHeight="".concat(getEl(".videoPreview video").offsetHeight,"px"),getEl(".container1").style.marginTop=videoHeight),gsap.to(".dallonses .section1 .header .videoPreview",{opacity:1,duration:1,delay:0}),gsap.to(".dallonses .section1 .headerTitle.front",{opacity:1,duration:1,delay:.5}),gsap.to(".dallonses .section1 .ctaHeader",{opacity:1,duration:1,delay:1}),gsap.to(".dallonses .section1 .container1",{opacity:1,duration:1,delay:1.5}),gsap.to(".dallonses .section1 .headerTitle.back",{opacity:1,duration:1,delay:1.5})}var animations=function(){var fadeInContainers;window.innerWidth<768?(getAllElements(".section1 .container1, .section1 .container21, .section1 .container3, .section1 .container5").forEach(function(container,containerIndex){var containerNumber=3===containerIndex?5:2===containerIndex?3:1===containerIndex?21:1,productsSlide=container.querySelectorAll(".product"),height=getEl(".section1 .product1").offsetHeight;productsSlide.forEach(function(product,productIndex){var prevContainerNum;21!==containerNumber&&5!==containerNumber||0!==productIndex||(prevContainerNum=21===containerNumber?2:containerNumber-1,new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(prevContainerNum),triggerHook:topTriggerHook,duration:height}).setPin(".dallonses .section1 .container".concat(containerNumber),{pushFollowers:!0}).addTo(controller)),5===containerNumber&&1===productIndex||new ScrollMagic.Scene({triggerElement:product,triggerHook:topTriggerHook,duration:height,offset:0}).setPin(product,{pushFollowers:!1}).addTo(controller)})}),fadeInContainers=getAllElements(".section1 .container2, .section1 .container4"),setTimeout(function(){fadeInContainers.forEach(function(container,containerIndex){var containerNumber=2;1===containerIndex&&(containerNumber=4);var productsSlide=container.querySelectorAll(".product"),height=getEl(".product.product3").offsetHeight;console.log("%c Var ","color: black; background-color: #00C6B9","height",height),productsSlide.forEach(function(product,productIndex){var _height;new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(containerNumber," .product:nth-of-type(").concat(productIndex+1,")"),triggerHook:topTriggerHook,duration:height}).setPin(".dallonses .section1 .container".concat(containerNumber," .product:nth-of-type(").concat(productIndex+1,")"),{pushFollowers:!1}).addTo(controller);1===productIndex&&(_height=product.offsetHeight,new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(containerNumber," .scrollmagic-pin-spacer:nth-of-type(2) .product"),triggerHook:topTriggerHook,duration:_height}).setTween(gsap.fromTo(".dallonses .section1 .container".concat(containerNumber," .scrollmagic-pin-spacer:nth-of-type(2) .product"),{opacity:0},{opacity:1,duration:1})).addTo(controller))})})},0)):(new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:1,duration:"200%"}).setTween(gsap.fromTo(".dallonses .section1 .container1 .product1",{y:"5vw"},{y:"-5vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:.9,duration:"200%"}).setTween(gsap.to(".dallonses .section1 .container1 .product2",{y:"-25vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:.8,duration:"200%"}).setTween(gsap.fromTo(".dallonses .section1 .container1 .product3",{y:"60vw"},{y:"0vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container2 .product4",triggerHook:topTriggerHook,duration:1.2*window.innerHeight-desktopMenu}).setPin(".dallonses .section1 .container2 .product4",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container2 .product5",triggerHook:topTriggerHook,duration:.2*window.innerHeight}).setPin(".dallonses .section1 .container2 .product5",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container21",triggerHook:1,duration:"50%"}).setTween(gsap.fromTo(".dallonses .section1 .container21 .product101",{opacity:0},{opacity:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container21",triggerHook:.7,duration:"50%"}).setTween(gsap.fromTo(".dallonses .section1 .container21 .product102",{opacity:0},{opacity:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:1,duration:"200%"}).setTween(gsap.fromTo(".dallonses .section1 .container3 .product6",{y:"5vw"},{y:"-5vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:.9,duration:"200%"}).setTween(gsap.to(".dallonses .section1 .container3 .product7",{y:"-25vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:.8,duration:"200%"}).setTween(gsap.fromTo(".dallonses .section1 .container3 .product8",{y:"60vw"},{y:"0vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container4 .product9",triggerHook:topTriggerHook,duration:1.2*window.innerHeight-desktopMenu}).setPin(".dallonses .section1 .container4 .product9",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container4 .product10",triggerHook:topTriggerHook,duration:.2*window.innerHeight}).setPin(".dallonses .section1 .container4 .product10",{pushFollowers:!1}).addTo(controller));new ScrollMagic.Scene({triggerElement:".dallonses .section1 .product12",triggerHook:.5,offset:.2*window.innerWidth}).setTween(gsap.fromTo(".dallonses .container5 h2",{y:100,opacity:0},{y:"0",opacity:1,duration:2})).addTo(controller);768<window.innerWidth&&(new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:topTriggerHook,offset:.34*window.innerWidth+desktopMenu,duration:"200%"}).setTween(gsap.to(".dallonses .headerTitle.back",{top:"40vh",duration:2})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:0,duration:.34*window.innerWidth+desktopMenu}).setPin(".dallonses .headerTitle.front",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:topTriggerHook,offset:.34*window.innerWidth+desktopMenu,duration:1}).setTween(gsap.to(".dallonses .headerTitle.front",{opacity:0,duration:2})).addTo(controller));new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container5 .product11",triggerHook:topTriggerHook}).setTween(gsap.to(".dallonses .headerTitle",{opacity:0,duration:.1})).addTo(controller);var product12TitleDuration=1.333*(getEl(".section2").offsetTop-getEl(".animationTrigger").offsetTop);new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container5 .animationTrigger",triggerHook:1,duration:product12TitleDuration}).setTween(gsap.fromTo(".dallonses .section1 .container5 .title",{y:"-30vw"},{y:0})).addTo(controller);addGridAnimations("all")};animations(),window.onbeforeunload=function(){document.querySelector("body").scrollIntoView()};var video=getEl(".headerFullVideo"),videoPreviewContainer=getEl(".videoPreview"),videoPreview=getEl(".videoPreview video"),videoState=0;function playHeaderFullVideo(){var playVideo=function(){1===videoState?stopVideo():(gsap.to(video,{opacity:1,display:"block",duration:.4}),video.play(),videoState=1,videoPreview.pause(),video.addEventListener("ended",function(){stopVideo()}))},stopVideo=function(){gsap.to(video,{opacity:0,display:"block",duration:.4}),videoPreview.play(),video.pause(),videoState=0};4===video.readyState?playVideo():(video.addEventListener("loadeddata",function(){playVideo()}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(video.autoplay=!0,video.addEventListener("loadeddata",playVideo(),!1)))}videoPreviewContainer.addEventListener("click",playHeaderFullVideo),getEl(".section1").addEventListener("click",playHeaderFullVideo),console.log("%c Var ","color: black; background-color: #00C6B9","videoPreviewContainer",videoPreviewContainer),videoPreview.addEventListener("click",playHeaderFullVideo),console.log("%c Var ","color: black; background-color: #00C6B9","videoPreview",videoPreview),videoPreview.addEventListener("loadeddata",function(){startAnimation()}),/iPad|iPhone|iPod/.test(navigator.userAgent)?(videoPreview.autoplay=!0,videoPreview.addEventListener("loadeddata",startAnimation(),!1)):startAnimation();var grid=getEl(".section2"),gridView="all";function goTo(e,section){e&&e.preventDefault(),transition||fadeInOut(function(){return getEl(section).scrollIntoView()})}getEl(".selector > span").addEventListener("click",function(){getEl(".scrollToGrid").scrollIntoView()}),getEl(".hiddenMenu .woman").addEventListener("click",function(){toggleGrid("woman")}),getEl(".hiddenMenu .man").addEventListener("click",function(){toggleGrid("man")}),getEl(".hiddenMenu .all").addEventListener("click",function(){toggleGrid("all")}),768<window.innerWidth&&getEl(".menu .menuTitle").addEventListener("click",function(e){goTo(e,"#headerVideo")}),getEl(".menu a:nth-of-type(1)").addEventListener("click",function(e){goTo(e,"#interviews")}),getEl(".menu a:nth-of-type(2)").addEventListener("click",function(e){goTo(e,"#team")}),getEl(".menu a:nth-of-type(3)").addEventListener("click",function(e){goTo(e,"#playlist")});var transition=!1;function fadeInOut(callback,timeout){transition=!0;var div=document.createElement("div");div.style.cssText="position: fixed; top: 0; width: 100%; height: 100vh; background-color: white; opacity: 0; transition: opacity 1.2s; z-index: 1;",div.classList.add("fadeContainer"),document.querySelector(".dallonses").appendChild(div),setTimeout(function(){getEl(".fadeContainer").style.opacity=1,setTimeout(function(){callback(),setTimeout(function(){getEl(".fadeContainer").style.opacity=0,setTimeout(function(){getEl(".fadeContainer").remove(),transition=!1},1210)},timeout)},1200)},100)}function openMenu(){window.innerWidth<768&&!getEl(".menu").classList.contains("open")?getEl(".menu").classList.add("open"):window.innerWidth<768&&getEl(".menu").classList.contains("open")&&closeMenu()}function closeMenu(){window.innerWidth<768&&getEl(".menu").classList.contains("open")&&getEl(".menu").classList.remove("open")}function toggleGrid(type){transition||fadeInOut(function(){!function(type){getEl(".scrollToGrid").scrollIntoView();var allGridElements=getAllElements(".section2 .product");allGridElements.forEach(function(element,i){element.style.opacity=0,i===allGridElements.length-1&&gsap.to(document.querySelector(".dallonses .section2"),{opacity:1,duration:.5,delay:.5})}),setTimeout(function(){getEl(".section2 .gridType.".concat(gridView)).style.display="none",getEl(".section2 .gridType.".concat(type)).style.display="block",gsap.fromTo(".dallonses .section2 .gridType.".concat(type," .row:nth-of-type(1) .product"),{opacity:0},{opacity:1,duration:.2,stagger:.2}),gsap.fromTo(".dallonses .section2 .gridType.".concat(type," .row:nth-of-type(2) .product"),{opacity:0},{opacity:1,duration:.2,stagger:.2,delay:.5}),grid.style.opacity=1,addGridAnimations(gridView=type)},500)}(type)},400)}getEl(".menu").addEventListener("click",function(){openMenu()}),getEl(".section2").addEventListener("mouseenter",function(){closeMenu()}),getEl(".section2 .cta").addEventListener("click",function(){var hiddenRows=getAllElements(".section2 .mobileHidden");gsap.to(".dallonses .section2 .cta",{opacity:0,duration:.5}),setTimeout(function(){getEl(".section2 .cta").style.display="none",hiddenRows.forEach(function(row){row.classList.remove("mobileHidden"),Array.prototype.slice.call(row.children).forEach(function(children){children.style.opacity=0})}),addGridAnimations(gridView)},500)});var swiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0});getEl(".sliderCta.next").addEventListener("click",function(){swiper.slideNext()}),getEl(".sliderCta.prev").addEventListener("click",function(){swiper.slidePrev()});
            });
        };
        _this.timestamp = '?t=' + timestampSvc.getTs();
        // Función para obtener los datos del Lookbook y pasarlos a la vista
        _this.getInfo = function() {
            console.log('GetInfo')
            if( ItxScreenSizeSvc.isMobile()){
                console.log('mobile')
                _this.image0 = _this.getImage("assets/image_s1_p1.jpg",300);

            }
            else{
                console.log('desktop')
                _this.image0 = _this.getImage("assets/image_s1_p1.jpg",900);
            }
           
            _this.image1 = _this.getImage("assets/image_s1_p2.jpg");
            _this.image2 = _this.getImage("assets/image_s1_p3.jpg");
            _this.image3 = _this.getImage("assets/image_s1_p4.jpg");
            _this.image4 = _this.getImage("assets/image_s1_p5.jpg");
            _this.image5 = _this.getImage("assets/image_s1_p101.jpg");
            _this.image6 = _this.getImage("assets/image_s1_p102.jpg");
            _this.image7 = _this.getImage("assets/image_s1_p6.jpg");
            _this.image8 = _this.getImage("assets/image_s1_p7.jpg");
            _this.image9 = _this.getImage("assets/image_s1_p8.jpg");
            _this.image10 = _this.getImage("assets/image_s1_p9.jpg");
            _this.image11 = _this.getImage("assets/image_s1_p10.jpg");
            _this.image12 = _this.getImage("assets/image_s1_p11.jpg");
            _this.image13 = _this.getImage("assets/image_s1_p12.jpg");
            _this.image14 = _this.getImage("assets/image_s2_p1.jpg");
            _this.image15 = _this.getImage("assets/image_s2_p2.jpg");
            _this.image16 = _this.getImage("assets/image_s2_p3.jpg");
            _this.image17 = _this.getImage("assets/image_s2_p4.jpg");
            _this.image18 = _this.getImage("assets/image_s2_p5.jpg");
            _this.image19 = _this.getImage("assets/image_s2_p6.jpg");
            _this.image20 = _this.getImage("assets/image_s2_p7.jpg");
            _this.image21 = _this.getImage("assets/image_s2_p8.jpg");
            _this.image22 = _this.getImage("assets/image_s2_p9.jpg");
            _this.image23 = _this.getImage("assets/image_s2_p10.jpg");
            _this.image24 = _this.getImage("assets/image_s2_p11.jpg");
            _this.image25 = _this.getImage("assets/image_s2_p12.jpg");
            _this.image26 = _this.getImage("assets/image_s2_p13.jpg");
            _this.image27 = _this.getImage("assets/image_s2_p14.jpg");
            _this.image28 = _this.getImage("assets/image_s2_p15.jpg");
            _this.image29 = _this.getImage("assets/image_s2_p16.jpg");
            _this.image30 = _this.getImage("assets/image_s2_p17.jpg");
            _this.image31 = _this.getImage("assets/image_s2_p18.jpg");
            _this.image32 = _this.getImage("assets/image_s2_p19.jpg");
            _this.image33 = _this.getImage("assets/image_s2_p20.jpg");
            _this.image34 = _this.getImage("assets/image_s2_p21.jpg");
            _this.image35 = _this.getImage("assets/image_s2_p22.jpg");
            _this.image36 = _this.getImage("assets/image_s2_p23.jpg");
            _this.image37 = _this.getImage("assets/image_s2_p24.jpg");
            _this.image38 = _this.getImage("assets/image_s2_p25.jpg");
            _this.image39 = _this.getImage("assets/image_s2_p26.jpg");
            _this.image40 = _this.getImage("assets/image_s2_p27.jpg");
            _this.image41 = _this.getImage("assets/image_s2_p28.jpg");
            _this.image42 = _this.getImage("assets/image_s2_p29.jpg");
            _this.image43 = _this.getImage("assets/image_s2_p30.jpg");
            _this.image44 = _this.getImage("assets/image_s2_p31.jpg");
            _this.image45 = _this.getImage("assets/image_s2_p32.jpg");
            _this.image46 = _this.getImage("assets/image_s2_p33.jpg");
            _this.image47 = _this.getImage("assets/image_s2_p34.jpg");
            _this.image48 = _this.getImage("assets/image_s2_p35.jpg");
            _this.image49 = _this.getImage("assets/image_s2_p36.jpg");
            _this.image50 = _this.getImage("assets/image_s2_p37.jpg");
            _this.image51 = _this.getImage("assets/image_s2_p38.jpg");
            _this.image52 = _this.getImage("assets/image_s2_p39.jpg");
            _this.image53 = _this.getImage("assets/image_s2_p40.jpg");
            _this.image54 = _this.getImage("assets/image_s2_p41.jpg");
            _this.image55 = _this.getImage("assets/image_s2_p42.jpg");
            _this.image56 = _this.getImage("assets/image_s2_p43.jpg");
            _this.image57 = _this.getImage("assets/image_s2_p44.jpg");
            _this.image58 = _this.getImage("assets/image_s2_p45.jpg");
            _this.image59 = _this.getImage("assets/image_s2_p46.jpg");
            _this.image60 = _this.getImage("assets/image_s2_p47.jpg");
            _this.image61 = _this.getImage("assets/image_s2_p48.jpg");
            _this.image62 = _this.getImage("assets/image_s2_p49.jpg");
            _this.image63 = _this.getImage("assets/image_s2_p50.jpg");
            _this.image64 = _this.getImage("assets/image_s2_p51.jpg");
            _this.image65 = _this.getImage("assets/image_s2_p1.jpg");
            _this.image66 = _this.getImage("assets/image_s2_p2.jpg");
            _this.image67 = _this.getImage("assets/image_s2_p4.jpg");
            _this.image68 = _this.getImage("assets/image_s2_p6.jpg");
            _this.image69 = _this.getImage("assets/image_s2_p7.jpg");
            _this.image70 = _this.getImage("assets/image_s2_p8.jpg");
            _this.image71 = _this.getImage("assets/image_s2_p10.jpg");
            _this.image72 = _this.getImage("assets/image_s2_p11.jpg");
            _this.image73 = _this.getImage("assets/image_s2_p13.jpg");
            _this.image74 = _this.getImage("assets/image_s2_p14.jpg");
            _this.image75 = _this.getImage("assets/image_s2_p15.jpg");
            _this.image76 = _this.getImage("assets/image_s2_p17.jpg");
            _this.image77 = _this.getImage("assets/image_s2_p18.jpg");
            _this.image78 = _this.getImage("assets/image_s2_p20.jpg");
            _this.image79 = _this.getImage("assets/image_s2_p22.jpg");
            _this.image80 = _this.getImage("assets/image_s2_p24.jpg");
            _this.image81 = _this.getImage("assets/image_s2_p26.jpg");
            _this.image82 = _this.getImage("assets/image_s2_p27.jpg");
            _this.image83 = _this.getImage("assets/image_s2_p29.jpg");
            _this.image84 = _this.getImage("assets/image_s2_p31.jpg");
            _this.image85 = _this.getImage("assets/image_s2_p34.jpg");
            _this.image86 = _this.getImage("assets/image_s2_p35.jpg");
            _this.image87 = _this.getImage("assets/image_s2_p37.jpg");
            _this.image88 = _this.getImage("assets/image_s2_p39.jpg");
            _this.image89 = _this.getImage("assets/image_s2_p42.jpg");
            _this.image90 = _this.getImage("assets/image_s2_p43.jpg");
            _this.image91 = _this.getImage("assets/image_s2_p45.jpg");
            _this.image92 = _this.getImage("assets/image_s2_p48.jpg");
            _this.image93 = _this.getImage("assets/image_s2_p49.jpg");
            _this.image94 = _this.getImage("assets/image_s2_p3.jpg");
            _this.image95 = _this.getImage("assets/image_s2_p5.jpg");
            _this.image96 = _this.getImage("assets/image_s2_p9.jpg");
            _this.image97 = _this.getImage("assets/image_s2_p12.jpg");
            _this.image98 = _this.getImage("assets/image_s2_p16.jpg");
            _this.image99 = _this.getImage("assets/image_s2_p19.jpg");
            _this.image100 = _this.getImage("assets/image_s2_p21.jpg");
            _this.image101 = _this.getImage("assets/image_s2_p23.jpg");
            _this.image102 = _this.getImage("assets/image_s2_p25.jpg");
            _this.image103 = _this.getImage("assets/image_s2_p28.jpg");
            _this.image104 = _this.getImage("assets/image_s2_p30.jpg");
            _this.image105 = _this.getImage("assets/image_s2_p32.jpg");
            _this.image106 = _this.getImage("assets/image_s2_p33.jpg");
            _this.image107 = _this.getImage("assets/image_s2_p38.jpg");
            _this.image108 = _this.getImage("assets/image_s2_p36.jpg");
            _this.image109 = _this.getImage("assets/image_s2_p40.jpg");
            _this.image110 = _this.getImage("assets/image_s2_p41.jpg");
            _this.image111 = _this.getImage("assets/image_s2_p44.jpg");
            _this.image112 = _this.getImage("assets/image_s2_p47.jpg");
            _this.image113 = _this.getImage("assets/image_s2_p46.jpg");
            _this.image114 = _this.getImage("assets/image_s2_p50.jpg");
            _this.image115 = _this.getImage("assets/image_s2_p51.jpg");
            _this.image116 = _this.getImage("assets/slider.jpg");
            _this.image117 = _this.getImage("assets/slider.jpg");
            _this.image118 = _this.getImage("assets/slider.jpg");
            _this.image119 = _this.getImage("assets/header_teaser.mp4");
            _this.image120 = _this.getImage("assets/poster.jpg");
        };

        // Función para activar el modo Ghost
        _this.activeGhostMode = function() {

            $('body').removeClass('compact-mode');
            $('body').addClass('ghost-mode light-theme');

            $(window).scroll(function() {

                if($(window).scrollTop() > 50) {
                    $('body').addClass('contracted');
                }
                else {
                    $('body').removeClass('contracted');
                }
            });

        };
        _this.showLook = function(id) {
            
            
            //imMicrositeService.createProductEvent(id);
            //imMicrositeService.createPopupViewBundle(id);

            // Si es una webview de las apps, redrigimos al bundle
            if (mdUtils.isWebapp()) {

                window.location.href= 'massimodutti://virtualStore/product/' + id;

                return;
            }
            cmsLookbookSvc.managementActionCms( {productId:id});
            
            // Parsea los productos del bundle
            /*BundleSvc.parseBundleProducts(id).then(function (bundles) {

                // Abre la ventana modal con los productos del bundle
                ngDialog.open({
                    template:
                        '<div class="cmp-bundle-v19-detail">'+
                            '<lazy-cmp-bundle products="ngDialogData.bundleProducts"></lazy-cmp-bundle>'+
                        '</div>',
                    className: 'ngdialog-theme-plain new-modal ngdialog-featured-bundle ma-modal-sm',
                    bodyClassName: 'ng-dialog-featured-bundle-open',
                    plain: true,
                    showClose: true,
                    data: {
                        bundleProducts: bundles
                    }
                });

            });*/
        };

        // Función para obtener la imagen de un bundle dado
        _this.getImage = function(image_name, size) {
            if(!size){
                size = 1900
            }

            return itxAkamaiSvc.useAkamaiImage(ItxStaticResourceSvc.getStatic() + '/media/2020/microsites/desfile_ss20/'+image_name+'?ts=' + _this.timestamp, size)
        };

    }

    angular.module('itxApp.microSite')
        .component('itxMainComponent', ItxMainComponent);

})();