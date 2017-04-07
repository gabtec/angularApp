(function(){
    'use strict';

    angular
		.module("app")
		.controller("CoreController", CoreControllerFunction);
        
    function CoreControllerFunction(){

        var vm = this;

        vm.title = 'Angular Base App';
        vm.status = 'OK';
    };

})();