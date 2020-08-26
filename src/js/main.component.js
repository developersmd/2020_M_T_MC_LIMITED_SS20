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
        'ItxStaticResourceSvc'
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
        ItxStaticResourceSvc
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
            });
        };

        // Función para obtener los datos del Lookbook y pasarlos a la vista
        _this.getInfo = function() {
            console.log('GetInfo')
            _this.image = _this.getImage('image_1.jpg');
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
            alert('showing'+id);
            imMicrositeService.createProductEvent(_this.bundle);
            imMicrositeService.createPopupViewBundle(_this.bundle);

            // Si es una webview de las apps, redrigimos al bundle
            if (mdUtils.isWebapp()) {

                window.location.href= 'massimodutti://virtualStore/product/' + _this.bundle.id;

                return;
            }
 
            // Parsea los productos del bundle
            BundleSvc.parseBundleProducts(_this.bundle).then(function (bundles) {

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
                
            });            
        };

        // Función para obtener la imagen de un bundle dado
        _this.getImage = function(image_name) { 

            return itxAkamaiSvc.useAkamaiImage(ItxStaticResourceSvc.getStatic() + '/media/2020/microsites/desfile_ss20/'+image_name+'?ts=' + _this.timeStamp, _this.size)
        };

    }

    angular.module('itxApp.microSite')
        .component('itxMainComponent', ItxMainComponent);

})();