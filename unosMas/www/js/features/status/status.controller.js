angular
	.module('unoMas.status')
	.controller('StatusCtrl', StatusCtrl);

function StatusCtrl($state) {
	var vm = this;

	vm.continue = function(){
		$state.go('status');
	};


	var $ = angular.element;
	$(document).ready(function(){

		$.fx.interval = 300;
	   
		$(".progress").animate( {width: "100%" }, { 
		    duration: 8000,    
		    step: function(now, fx){ 
		    if(fx.prop == 'width') {
		              var countup = Math.round( (now / 100) * 100) + '%';
		    $(".countup").html(countup); }    
		    },            
		  
		  	start: function() { $(this).before("<div class='load'><p>loading...</p></div>"); },  
		  
		  	complete: function() { $(this).after("<div class='logo'><img src='https://lh4.googleusercontent.com/-nZJWhA7TIDA/UxJ5tAfOQoI/AAAAAAAAAOQ/3OlelniSYw0/w410-h445-no/Treehouse-Logo-Mark.png'></div>"); }, 
		 
			done: function() { $("div.load").html("<p>loaded</p>"); }
		         
	    });    
	});
}