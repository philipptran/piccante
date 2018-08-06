ko.Piccante.vm.PageJobsVM = function(){
	
	var self = this;
	var _conf = {
			templateName: "pj-template"
	};
	
	self.render = function(node){
		self.loadTemplate(_conf.templateName).then(function(templateName){
			self.applyBindings(templateName, node);
		});
	};
	
	ko.Piccante.vm.BaseVM.apply(self);
};