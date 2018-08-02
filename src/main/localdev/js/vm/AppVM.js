ko.Piccante.vm.AppVM = function() {

	console.log("AppVM on init: ", true);
	var self = this;
	var _routeNode = $('.routeNode');
	
	self.NavBar = new ko.Piccante.vm.NavBarVM();
	
	self.render = function(vm){
		console.log("Start to render the content");
		ko.cleanNode(_routeNode[0]);
		_routeNode.empty();
		if(vm && vm.render){
			vm.render(_routeNode);
		}
	};
	
	
	ko.Piccante.vm.BaseVM.apply(self);
};