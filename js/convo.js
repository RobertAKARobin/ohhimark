'use strict';

(function(){

	angular
		.module('app')
		.factory('Convo', convoFactory)
		.controller('convo', ConvoController);

	convoFactory.$inject = ['$firebaseArray', 'REF'];

	function convoFactory($firebaseArray, REF){
		var Convo = {};
		var Message = {};

		Convo.loadMany = function(path){
			var path = REF.convo + (path ? '/' + path : '');
			var ref = firebase.database().ref(path);
			return $firebaseArray(ref);
		}

		return Convo;
	}

	ConvoController.$inject = ['Convo'];

	function ConvoController(Convo){
		var vm = this;
		vm.all = Convo.loadMany();
	}

})();
