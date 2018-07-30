ko.Piccante.vm.NavBarVM = function() {

	console.log("NavBarVM on Init: ", true);
	
	var self = this;
	
	self.VIEWS = [ "home", "offer", "sick","team", "jobs", "contact" ];
	self.activeView = ko.observable("");
	
	ko.Piccante.vm.BaseVM.apply(self);
};