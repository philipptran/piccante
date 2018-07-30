ko.Piccante.vm.PageTeamVM = function(){

	console.log("This is the Team Page");
	var self = this;
	var _conf = {
			template: "pt-template"
	};
	
	self.render = function(node){
		self.loadTemplate(_conf.template).then(function(templateName){
			self.applyBindings(templateName, node);
		});
	};
	
	ko.Piccante.vm.BaseVM.apply(self);
};