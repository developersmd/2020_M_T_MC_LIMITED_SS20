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
        _this.$onInit = function () {
            _this.inditexReady = false
            _this.getInfo();
            inditex.onReady(function() {

                _this.inditexReady = true

                document.querySelector('.dallonses').classList.add(mdUtils.isWebapp() ? 'is-webapp' : 'is-web')

                // Añadimos las clases al body para activar el modo Ghost
                _this.activeGhostMode();

                // Ocultamos el cargador
                mdLoaderService.hide();

                // Obtenemos los datos para pasarlos a la vista
                imMicrositeService.sendPageview();

                // we load fragment s microsite

                function getEl(element){return document.querySelector(".dallonses ".concat(element))}function getAllElements(elements){return document.querySelectorAll(".dallonses ".concat(elements))}var gridScenes=[];function addGridAnimations(type){var controller=new ScrollMagic.Controller;0<gridScenes.length&&(gridScenes.forEach(function(scene){scene.destroy()}),gridScenes=[]),getAllElements(".section2 .gridType.".concat(type)).forEach(function(grid){grid.querySelectorAll(".row").forEach(function(row,i){var rowAnimation=new ScrollMagic.Scene({triggerElement:row,triggerHook:.8}).setTween(TweenMax.fromTo(row.children,1,{opacity:0},{opacity:1,duration:.4,stagger:.5})).addTo(controller);gridScenes.push(rowAnimation)})})}function startAnimation(){var controller=new ScrollMagic.Controller,screenWidth=mobile?window.screen.width:window.innerWidth,screenHeight=mobile?window.screen.height:window.innerHeight,desktopMenu=1280<=screenWidth?70:50;document.querySelector(".dallonses").classList.contains("is-webapp")&&(desktopMenu=0);var topTriggerHook=desktopMenu/(screenHeight/100)/100;"scrollRestoration"in history&&(history.scrollRestoration="manual"),document.querySelector("html").style.overflow="visible",mobile&&(getEl(".section1").style.marginTop=1.3333125*window.innerWidth+"px");(new TimelineMax).add(TweenMax.to(".dallonses .section1 .headerTitle.front",1,{opacity:1,delay:0})).add(TweenMax.to(".dallonses .section1 .headerTitle.back",0,{opacity:1,delay:0})).add(TweenMax.to(".dallonses .section1 .header .videoPreview video",1,{opacity:1,delay:0})).add(TweenMax.to(".dallonses .section1 .ctaHeader",1,{opacity:1,delay:-.8})).add(TweenMax.to(".dallonses .section1 .container1",1,{opacity:1,delay:-.8}));!function(){var headerTitleHeight,headerTitlePosition,imagesLoaded=0;function imageLoaded(el){var heightImageFade,swapContainers,fadeInContainers,allContainers;el.style.minHeight="inherit",imagesLoaded+=1,mobile&&imagesLoaded===getAllElements(".section1 img").length&&(heightImageFade=.4*(getEl(".product.product5").clientHeight+window.innerHeight)+200,swapContainers=getAllElements(".section1 .container1, .section1 .container21, .section1 .container3, .section1 .container5"),fadeInContainers=getAllElements(".section1 .container2, .section1 .container4"),(allContainers=getAllElements(".dll-container")).forEach(function(c,index){var container=c;container.classList.contains("container21")&&(container=container.querySelector(".productRow")),container.classList.contains("container5")||(container.style.height=container.clientHeight+window.innerHeight+"px",allContainers[index+1]&&(allContainers[index+1].style.marginTop=-window.innerHeight+"px"))}),swapContainers.forEach(function(container,containerIndex){var containerNumber=3===containerIndex?5:2===containerIndex?3:1===containerIndex?21:1;container.querySelectorAll(".product").forEach(function(product,productIndex){var prevContainerNum;product.clientHeight;21!==containerNumber&&5!==containerNumber||0!==productIndex||(prevContainerNum=21===containerNumber?2:containerNumber-1,new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(prevContainerNum),triggerHook:topTriggerHook,duration:heightImageFade}).setPin(".dallonses .section1 .container".concat(containerNumber," .productRow"),{pushFollowers:!0}).addTo(controller))})}),fadeInContainers.forEach(function(container,containerIndex){var containerNumber=1===containerIndex?4:2;container.querySelectorAll(".product").forEach(function(product,productIndex){var heightPrevSibiling;1===productIndex&&(heightPrevSibiling=product.previousSibling.offsetHeight+2,product.style.height=heightPrevSibiling+"px",product.querySelector("img").style.height=heightPrevSibiling+"px",product.previousSibling.querySelector("img").style.height=heightPrevSibiling+"px",new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(containerNumber),triggerHook:topTriggerHook,duration:heightImageFade}).setPin(".dallonses .section1 .container".concat(containerNumber," .product:nth-of-type(").concat(productIndex+1,")"),{pushFollowers:!1}).addTo(controller),product.offsetHeight,new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container".concat(containerNumber),triggerHook:topTriggerHook,duration:.5*heightImageFade-200,offset:200}).setTween(TweenMax.fromTo(".dallonses .section1 .container".concat(containerNumber," .scrollmagic-pin-spacer:nth-of-type(2) .product img"),{opacity:0},{opacity:1,duration:1})).addTo(controller))})}))}getAllElements(".section1 img").forEach(function(el,index){el.complete&&imageLoaded(el),el.onload=function(){return imageLoaded(el)},el.error=function(){return imageLoaded(el)}}),mobile||(document.querySelector("body").style.overflow="inherit",new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:1,duration:"200%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container1 .product1",1,{y:"5vw"},{y:"-5vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:.9,duration:"200%"}).setTween(TweenMax.to(".dallonses .section1 .container1 .product2",1,{y:"-45vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container1",triggerHook:.8,duration:"200%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container1 .product3",1,{y:"80vw"},{y:"-10vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container2 .product4",triggerHook:topTriggerHook,duration:1.2*window.innerHeight-desktopMenu}).setPin(".dallonses .section1 .container2 .product4",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container2 .product5",triggerHook:topTriggerHook,duration:.2*window.innerHeight}).setPin(".dallonses .section1 .container2 .product5",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container21",triggerHook:1,duration:"50%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container21 .product101",1,{opacity:0},{opacity:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container21",triggerHook:.7,duration:"50%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container21 .product102",1,{opacity:0},{opacity:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:1,duration:"200%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container3 .product6",1,{y:"5vw"},{y:"-5vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:.9,duration:"200%"}).setTween(TweenMax.to(".dallonses .section1 .container3 .product7",1,{y:"-45vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container3",triggerHook:.8,duration:"200%"}).setTween(TweenMax.fromTo(".dallonses .section1 .container3 .product8",1,{y:"80vw"},{y:"-10vw"})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container4 .product9",triggerHook:topTriggerHook,duration:1.2*window.innerHeight-desktopMenu}).setPin(".dallonses .section1 .container4 .product9",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container4 .product10",triggerHook:topTriggerHook,duration:.2*window.innerHeight}).setPin(".dallonses .section1 .container4 .product10",{pushFollowers:!1}).addTo(controller)),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .product12",triggerHook:.5,offset:.2*window.innerWidth}).setTween(TweenMax.fromTo(".dallonses .container5 h2",1,{y:100,opacity:0},{y:"0",opacity:1,duration:2})).addTo(controller),mobile||(headerTitleHeight=getEl(".headerTitle.back").offsetHeight,headerTitlePosition=.5*(screenHeight-desktopMenu)-.5*headerTitleHeight+desktopMenu+"px",new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:topTriggerHook,offset:.34*window.innerWidth+desktopMenu,duration:"200%"}).setTween(TweenMax.to(".dallonses .headerTitle.back",1,{top:headerTitlePosition,duration:2})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:0,duration:.34*window.innerWidth+desktopMenu}).setPin(".dallonses .headerTitle.front",{pushFollowers:!1}).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .header",triggerHook:topTriggerHook,offset:.34*window.innerWidth+desktopMenu,duration:1}).setTween(TweenMax.to(".dallonses .headerTitle.front",1,{opacity:0,duration:2})).addTo(controller)),new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container5 .product11",triggerHook:topTriggerHook}).setTween(TweenMax.to(".dallonses .headerTitle",.001,{opacity:0,duration:0})).addTo(controller);var product12TitleDuration=1.333*(getEl(".section2").offsetTop-getEl(".animationTrigger").offsetTop);new ScrollMagic.Scene({triggerElement:".dallonses .section1 .container5 .animationTrigger",triggerHook:1,duration:product12TitleDuration}).setTween(TweenMax.fromTo(".dallonses .section1 .container5 .title",1,{y:"-30vw"},{y:0})).addTo(controller),addGridAnimations("all"),mobile?(new ScrollMagic.Scene({triggerElement:".dallonses .section3 #interviews",triggerHook:.2}).setTween(TweenMax.fromTo(".dallonses .section3 #interviews .swiper-container",1,{y:"12vw"},{y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #interviews",triggerHook:.3}).setTween(TweenMax.fromTo(".dallonses .section3 #interviews .text",1,{y:"12vw"},{y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #team",triggerHook:.3}).setTween(TweenMax.fromTo(".dallonses .section3 #team .text",1,{y:"12vw"},{y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #team",triggerHook:.2}).setTween(TweenMax.fromTo(".dallonses  .section3 #team .cta",1,{y:"12vw"},{y:0,duration:1})).addTo(controller)):(new ScrollMagic.Scene({triggerElement:".dallonses .section3 #interviews",triggerHook:.65}).setTween(TweenMax.fromTo(".dallonses .section3 #interviews .swiper-container",1,{opacity:0,y:"12vw"},{opacity:1,y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #interviews .swiper-wrapper",triggerHook:.6}).setTween(TweenMax.fromTo(".dallonses .section3 #interviews .text",1,{opacity:0,y:"12vw"},{opacity:1,y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #team",triggerHook:.5}).setTween(TweenMax.fromTo(".dallonses .section3 #team .text",1,{opacity:0,y:"20vw"},{opacity:1,y:0,duration:1})).addTo(controller),new ScrollMagic.Scene({triggerElement:".dallonses .section3 #team",triggerHook:.4}).setTween(TweenMax.fromTo(".dallonses  .section3 #team .cta",1,{opacity:0,y:"20vw"},{opacity:1,y:0,duration:1})).addTo(controller))}()}var mobile=window.innerWidth<768;function dllRun(){window.onbeforeunload=function(){document.querySelector("body").scrollIntoView()};var menuHeight=1280<=window.innerWidth?70:50,video=getEl(mobile?".headerFullVideo.mobile":".headerFullVideo"),videoPreviewContainer=getEl(".videoPreview"),videoPreview=getEl(mobile?".videoPreview video.mobile":".videoPreview video"),videoState=0;videoPreviewContainer.addEventListener("click",function(){var stopVideo=function(){gsap.to(video,{opacity:0,display:"block",duration:.4}),videoPreview.play(),video.pause(),videoState=0};1===videoState?stopVideo():(gsap.to(video,{opacity:1,display:"block",duration:.4}),video.play(),videoState=1,videoPreview.pause(),video.addEventListener("ended",function(){stopVideo()}))});var grid=getEl(".section2"),gridView="all";function goTo(e,section){mobile&&closeMenu(),e&&e.preventDefault();var scrollPosition=getEl(section).offsetTop;window.innerWidth<768&&(scrollPosition-=100+menuHeight),transition||fadeInOut(function(){return window.scrollTo(0,scrollPosition)})}getEl(".hiddenMenu .woman").addEventListener("click",function(){toggleGrid("woman")}),getEl(".hiddenMenu .man").addEventListener("click",function(){toggleGrid("man")}),getEl(".hiddenMenu .all").addEventListener("click",function(){toggleGrid("all")}),getEl(".menu a:nth-of-type(1)").addEventListener("click",function(e){goTo(e,"#interviews")}),getEl(".menu a:nth-of-type(2)").addEventListener("click",function(e){goTo(e,"#team")}),mobile&&getEl(".menu .selector > span").addEventListener("click",function(e){getEl(".menu .selector").classList.contains("active")?getEl(".menu .selector").classList.remove("active"):getEl(".menu .selector").classList.add("active")});var transition=!1;function fadeInOut(callback,timeout){transition=!0;var div=document.createElement("div");div.style.cssText="position: fixed; top: 0; width: 100%; height: 100vh; background-color: white; opacity: 0; transition: opacity 1.2s; z-index: 1;",div.classList.add("fadeContainer"),document.querySelector(".dallonses").appendChild(div),setTimeout(function(){getEl(".fadeContainer").style.opacity=1,setTimeout(function(){callback(),setTimeout(function(){getEl(".fadeContainer").style.opacity=0,setTimeout(function(){getEl(".fadeContainer").remove(),transition=!1},1210)},timeout)},1200)},100)}function closeMenu(){window.innerWidth<768&&getEl(".menu").classList.contains("open")&&getEl(".menu").classList.remove("open")}function toggleGrid(type){mobile&&(getEl(".menu .selector").classList.remove("active"),closeMenu());transition||fadeInOut(function(){!function(type){var scrollPosition=getEl(".scrollToGrid").offsetTop+menuHeight;window.scrollTo(0,scrollPosition);var allGridElements=getAllElements(".section2 .product");allGridElements.forEach(function(element,i){element.style.opacity=0,i===allGridElements.length-1&&gsap.to(document.querySelector(".dallonses .section2"),{opacity:1,duration:.5,delay:.5})}),setTimeout(function(){getEl(".section2 .gridType.".concat(gridView)).style.display="none",getEl(".section2 .gridType.".concat(type)).style.display="block",gsap.fromTo(".dallonses .section2 .gridType.".concat(type," .row:nth-of-type(1) .product"),{opacity:0},{opacity:1,duration:.2,stagger:.2}),gsap.fromTo(".dallonses .section2 .gridType.".concat(type," .row:nth-of-type(2) .product"),{opacity:0},{opacity:1,duration:.2,stagger:.2,delay:.5}),grid.style.opacity=1,addGridAnimations(gridView=type)},500)}(type)},400)}getEl(".menuTitle").addEventListener("click",function(){window.innerWidth<768&&!getEl(".menu").classList.contains("open")?getEl(".menu").classList.add("open"):window.innerWidth<768&&getEl(".menu").classList.contains("open")&&closeMenu()}),mobile||getEl(".section2").addEventListener("mouseenter",function(){closeMenu()}),getEl(".section2 .cta").addEventListener("click",function(){var hiddenRows=getAllElements(".section2 .mobileHidden");gsap.to(".dallonses .section2 .cta",{opacity:0,duration:.5}),setTimeout(function(){getEl(".section2 .cta").style.display="none",hiddenRows.forEach(function(row){row.classList.remove("mobileHidden"),Array.prototype.slice.call(row.children).forEach(function(children){children.style.opacity=0})}),addGridAnimations(gridView)},500)});var interviewVideos=getAllElements("#interviews .swiper-slide");interviewVideos.forEach(function(interviewVideo){var iVideo=interviewVideo.querySelector("video"),cta=interviewVideo.querySelector(".ctaInterviewVideo");iVideo.addEventListener("click",function(){iVideo.paused?(iVideo.play(),cta.style.opacity=0):(iVideo.pause(),cta.style.opacity=1)})});var swiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,simulateTouch:!!mobile});getEl(".sliderCta.next").addEventListener("click",function(){swiper.slideNext()}),getEl(".sliderCta.prev").addEventListener("click",function(){swiper.slidePrev()}),swiper.on("slideChange",function(){interviewVideos.forEach(function(interview){interview.querySelector("video").pause(),interview.querySelector(".ctaInterviewVideo").style.opacity=1})})}function loadScript(src){return new Promise(function(resolve,reject){var s=document.createElement("script");s.src=src,s.onload=resolve,s.onerror=reject,document.head.appendChild(s)})}loadScript("//cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js").catch(function(){return console.log("Error CDN1 gsap")}).then(function(){loadScript("//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js").catch(function(){return console.log("Error CDN2 ScrollMagic")}).then(function(){loadScript("//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js").catch(function(){return console.log("Error CDN3 plugins/animation.gsap")}).then(function(){loadScript("//cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/js/swiper.min.js").catch(function(){return console.log("Error CDN4 swiper")}).then(function(){dllRun(),startAnimation()})})})});


            });
        };
        _this.timestamp = '?t=' + timestampSvc.getTs();

        _this.roundHundred = function(value) {
            return Math.round(value/100)*100
        }

        _this.getResizedImage = function(image_name) {
            const { innerWidth } = window
            if (ItxScreenSizeSvc.isMobile()) {
              return _this.getImage(image_name, _this.roundHundred(window.innerWidth * 0.75))
            } else {
              const isHorizontal = _this.horizontalImages.includes(image_name)
              const width = isHorizontal ? innerWidth * 0.75 : (innerWidth / 2) * 0.75
              return _this.getImage(image_name, _this.roundHundred(width))
            }
        };

        _this.getInfo = function() {
            console.log('GetInfo')

            _this.horizontalImages = [
                'assets/image_s2_p2.jpg',
                'assets/image_s2_p3.jpg',
                'assets/image_s2_p9.jpg',
                'assets/image_s2_p10.jpg',
                'assets/image_s2_p12.jpg',
                'assets/image_s2_p13.jpg',
                'assets/image_s2_p19.jpg',
                'assets/image_s2_p20.jpg',
                'assets/image_s2_p27.jpg',
                'assets/image_s2_p28.jpg',
                'assets/image_s2_p30.jpg',
                'assets/image_s2_p32.jpg',
                'assets/image_s2_p36.jpg',
                'assets/image_s2_p39.jpg',
                'assets/image_s2_p40.jpg',
                'assets/image_s2_p41.jpg',
                'assets/image_s2_p47.jpg',
                'assets/image_s2_p48.jpg'
            ]

            _this.image0 = _this.getResizedImage("assets/image_s1_p1.jpg");
            _this.image1 = _this.getResizedImage("assets/image_s1_p2.jpg");
            _this.image2 = _this.getResizedImage("assets/image_s1_p3.jpg");
            _this.image3 = _this.getResizedImage("assets/image_s1_p4.jpg");
            _this.image4 = _this.getResizedImage("assets/image_s1_p5.jpg");
            _this.image5 = _this.getResizedImage("assets/image_s1_p101.jpg");
            _this.image6 = _this.getResizedImage("assets/image_s1_p102.jpg");
            _this.image7 = _this.getResizedImage("assets/image_s1_p6.jpg");
            _this.image8 = _this.getResizedImage("assets/image_s1_p7.jpg");
            _this.image9 = _this.getResizedImage("assets/image_s1_p8.jpg");
            _this.image10 = _this.getResizedImage("assets/image_s1_p9.jpg");
            _this.image11 = _this.getResizedImage("assets/image_s1_p10.jpg");
            _this.image12 = _this.getResizedImage("assets/image_s1_p11.jpg");
            _this.image13 = _this.getResizedImage("assets/image_s1_p12.jpg");
            _this.image14 = _this.getResizedImage("assets/image_s2_p1.jpg");
            _this.image15 = _this.getResizedImage("assets/image_s2_p2.jpg");
            _this.image16 = _this.getResizedImage("assets/image_s2_p3.jpg");
            _this.image17 = _this.getResizedImage("assets/image_s2_p4.jpg");
            _this.image18 = _this.getResizedImage("assets/image_s2_p5.jpg");
            _this.image19 = _this.getResizedImage("assets/image_s2_p6.jpg");
            _this.image20 = _this.getResizedImage("assets/image_s2_p7.jpg");
            _this.image21 = _this.getResizedImage("assets/image_s2_p8.jpg");
            _this.image22 = _this.getResizedImage("assets/image_s2_p9.jpg");
            _this.image23 = _this.getResizedImage("assets/image_s2_p10.jpg");
            _this.image24 = _this.getResizedImage("assets/image_s2_p11.jpg");
            _this.image25 = _this.getResizedImage("assets/image_s2_p12.jpg");
            _this.image26 = _this.getResizedImage("assets/image_s2_p13.jpg");
            _this.image27 = _this.getResizedImage("assets/image_s2_p14.jpg");
            _this.image28 = _this.getResizedImage("assets/image_s2_p15.jpg");
            _this.image29 = _this.getResizedImage("assets/image_s2_p16.jpg");
            _this.image30 = _this.getResizedImage("assets/image_s2_p17.jpg");
            _this.image31 = _this.getResizedImage("assets/image_s2_p18.jpg");
            _this.image32 = _this.getResizedImage("assets/image_s2_p19.jpg");
            _this.image33 = _this.getResizedImage("assets/image_s2_p20.jpg");
            _this.image34 = _this.getResizedImage("assets/image_s2_p22.jpg");
            _this.image35 = _this.getResizedImage("assets/image_s2_p24.jpg");
            _this.image36 = _this.getResizedImage("assets/image_s2_p25.jpg");
            _this.image37 = _this.getResizedImage("assets/image_s2_p26.jpg");
            _this.image38 = _this.getResizedImage("assets/image_s2_p27.jpg");
            _this.image39 = _this.getResizedImage("assets/image_s2_p28.jpg");
            _this.image40 = _this.getResizedImage("assets/image_s2_p29.jpg");
            _this.image41 = _this.getResizedImage("assets/image_s2_p30.jpg");
            _this.image42 = _this.getResizedImage("assets/image_s2_p31.jpg");
            _this.image43 = _this.getResizedImage("assets/image_s2_p32.jpg");
            _this.image44 = _this.getResizedImage("assets/image_s2_p33.jpg");
            _this.image45 = _this.getResizedImage("assets/image_s2_p34.jpg");
            _this.image46 = _this.getResizedImage("assets/image_s2_p35.jpg");
            _this.image47 = _this.getResizedImage("assets/image_s2_p36.jpg");
            _this.image48 = _this.getResizedImage("assets/image_s2_p37.jpg");
            _this.image49 = _this.getResizedImage("assets/image_s2_p38.jpg");
            _this.image50 = _this.getResizedImage("assets/image_s2_p39.jpg");
            _this.image51 = _this.getResizedImage("assets/image_s2_p40.jpg");
            _this.image52 = _this.getResizedImage("assets/image_s2_p41.jpg");
            _this.image53 = _this.getResizedImage("assets/image_s2_p42.jpg");
            _this.image54 = _this.getResizedImage("assets/image_s2_p43.jpg");
            _this.image55 = _this.getResizedImage("assets/image_s2_p44.jpg");
            _this.image56 = _this.getResizedImage("assets/image_s2_p45.jpg");
            _this.image57 = _this.getResizedImage("assets/image_s2_p46.jpg");
            _this.image58 = _this.getResizedImage("assets/image_s2_p47.jpg");
            _this.image59 = _this.getResizedImage("assets/image_s2_p48.jpg");
            _this.image60 = _this.getResizedImage("assets/image_s2_p49.jpg");
            _this.image61 = _this.getResizedImage("assets/image_s2_p50.jpg");
            _this.image62 = _this.getResizedImage("assets/image_s2_p51.jpg");
            _this.image63 = _this.getResizedImage("assets/image_s2_p1.jpg");
            _this.image64 = _this.getResizedImage("assets/image_s2_p2.jpg");
            _this.image65 = _this.getResizedImage("assets/image_s2_p4.jpg");
            _this.image66 = _this.getResizedImage("assets/image_s2_p6.jpg");
            _this.image67 = _this.getResizedImage("assets/image_s2_p7.jpg");
            _this.image68 = _this.getResizedImage("assets/image_s2_p8.jpg");
            _this.image69 = _this.getResizedImage("assets/image_s2_p10.jpg");
            _this.image70 = _this.getResizedImage("assets/image_s2_p11.jpg");
            _this.image71 = _this.getResizedImage("assets/image_s2_p13.jpg");
            _this.image72 = _this.getResizedImage("assets/image_s2_p14.jpg");
            _this.image73 = _this.getResizedImage("assets/image_s2_p15.jpg");
            _this.image74 = _this.getResizedImage("assets/image_s2_p17.jpg");
            _this.image75 = _this.getResizedImage("assets/image_s2_p18.jpg");
            _this.image76 = _this.getResizedImage("assets/image_s2_p20.jpg");
            _this.image77 = _this.getResizedImage("assets/image_s2_p22.jpg");
            _this.image78 = _this.getResizedImage("assets/image_s2_p24.jpg");
            _this.image79 = _this.getResizedImage("assets/image_s2_p26.jpg");
            _this.image80 = _this.getResizedImage("assets/image_s2_p27.jpg");
            _this.image81 = _this.getResizedImage("assets/image_s2_p29.jpg");
            _this.image82 = _this.getResizedImage("assets/image_s2_p31.jpg");
            _this.image83 = _this.getResizedImage("assets/image_s2_p34.jpg");
            _this.image84 = _this.getResizedImage("assets/image_s2_p35.jpg");
            _this.image85 = _this.getResizedImage("assets/image_s2_p37.jpg");
            _this.image86 = _this.getResizedImage("assets/image_s2_p39.jpg");
            _this.image87 = _this.getResizedImage("assets/image_s2_p42.jpg");
            _this.image88 = _this.getResizedImage("assets/image_s2_p43.jpg");
            _this.image89 = _this.getResizedImage("assets/image_s2_p45.jpg");
            _this.image90 = _this.getResizedImage("assets/image_s2_p48.jpg");
            _this.image91 = _this.getResizedImage("assets/image_s2_p49.jpg");
            _this.image92 = _this.getResizedImage("assets/image_s2_p12.jpg");
            _this.image93 = _this.getResizedImage("assets/image_s2_p16.jpg");
            _this.image94 = _this.getResizedImage("assets/image_s2_p9.jpg");
            _this.image95 = _this.getResizedImage("assets/image_s2_p3.jpg");
            _this.image96 = _this.getResizedImage("assets/image_s2_p5.jpg");
            _this.image97 = _this.getResizedImage("assets/image_s2_p19.jpg");
            _this.image98 = _this.getResizedImage("assets/image_s2_p25.jpg");
            _this.image99 = _this.getResizedImage("assets/image_s2_p28.jpg");
            _this.image100 = _this.getResizedImage("assets/image_s2_p30.jpg");
            _this.image101 = _this.getResizedImage("assets/image_s2_p32.jpg");
            _this.image102 = _this.getResizedImage("assets/image_s2_p33.jpg");
            _this.image103 = _this.getResizedImage("assets/image_s2_p38.jpg");
            _this.image104 = _this.getResizedImage("assets/image_s2_p36.jpg");
            _this.image105 = _this.getResizedImage("assets/image_s2_p40.jpg");
            _this.image106 = _this.getResizedImage("assets/image_s2_p41.jpg");
            _this.image107 = _this.getResizedImage("assets/image_s2_p44.jpg");
            _this.image108 = _this.getResizedImage("assets/image_s2_p47.jpg");
            _this.image109 = _this.getResizedImage("assets/image_s2_p46.jpg");
            _this.image110 = _this.getResizedImage("assets/image_s2_p50.jpg");
            _this.image111 = _this.getResizedImage("assets/image_s2_p51.jpg");
            _this.image112 = _this.getResizedImage("assets/play.png");
            _this.image113 = _this.getResizedImage("assets/play.png");
            _this.image114 = _this.getResizedImage("assets/play.png");
            _this.image115 = _this.getResizedImage("assets/play.png");
            _this.image116 = _this.getResizedImage("assets/header_teaser.mp4");
            _this.image117 = _this.getResizedImage("assets/header_teaser_mobile.mp4");
            _this.image118 = _this.getResizedImage("assets/header.mp4");
            _this.image119 = _this.getResizedImage("assets/header_mobile.mp4");
            _this.image120 = _this.getResizedImage("assets/interview_EDIE.mp4");
            _this.image121 = _this.getResizedImage("assets/interview_FELICE.mp4");
            _this.image122 = _this.getResizedImage("assets/interview_MALLICK.mp4");
            _this.image123 = _this.getResizedImage("assets/interview_VICTOR.mp4");
            _this.image124 = _this.getResizedImage("assets/poster.jpg");
            _this.image125 = _this.getResizedImage("assets/poster_mobile.jpg");
            _this.image126 = _this.getResizedImage("assets/interview_EDIE.jpg");
            _this.image127 = _this.getResizedImage("assets/interview_FELICE.jpg");
            _this.image128 = _this.getResizedImage("assets/interview_MALLICK.jpg");
            _this.image129 = _this.getResizedImage("assets/interview_VICTOR.jpg");
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
            var scrollHeight = window.scrollY;
            if (mdUtils.isWebapp()) {
                window.location.href= 'massimodutti://virtualStore/product/' + id;
                window.scrollTo(0, scrollHeight)
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