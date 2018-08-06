ko.Piccante.vm.PageContactVM = function(){
	
	var self = this;
	var _conf = {
			template : "pc-template"
	};
	
	self.render = function(node){
		self.loadTemplate(_conf.template).then(function(templateName){
			self.applyBindings(templateName, node);
		});
	};
	
	ko.Piccante.vm.BaseVM.apply(self);
};