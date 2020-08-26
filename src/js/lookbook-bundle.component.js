/**
* @ngdoc component
* @name microSite.component:itxLookbookBundle
* @description
* Componente para presentar un bundle de productos
*/
(function() {
    'use strict';

    var itxLookbookBundle = {
        
        controller:   itxLookbookBundleCtrl,
        templateUrl: 'lookbook-bundle.component.html'
    };

    itxLookbookBundleCtrl.$inject = [
       
    ];

    function itxLookbookBundleCtrl (
 
    ) {

        var _this = this;  
        
        _this.$onInit = function () {
          
        };
        
      
    }

    angular.module('itxApp.microSite')
        .component('itxLookbookBundle', itxLookbookBundle);

})();