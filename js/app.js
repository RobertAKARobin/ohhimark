'use strict';

(function(){

	angular
		.module('app', [
			'firebase'
		])
		.constant('ENV', __env)
		.config(config);

	config.$inject = ['ENV'];

	function config(ENV){
		firebase.initializeApp(ENV.firebase);
	}

})();
