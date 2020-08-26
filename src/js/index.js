'use strict';

// Microsite para el desfile de hombres

function ItxMicroSiteCtrl() {}
 
angular
    .module('itxApp.microSite', [
        'itxApp.common',
        'itxApp.catalog'
    ]);

angular
    .module('itxApp.microSite')
    .controller('ItxMicroSiteCtrl', ItxMicroSiteCtrl);
