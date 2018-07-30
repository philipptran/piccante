ko.Piccante.vm.PageHomeVM = function (){
	
	console.log("Im the PageHomeMV");
	var self = this;
	var _conf = {
			template: "ph-template"
	};
	
	self.render = function(node){
		self.loadTemplate(_conf.template).then(function(templateName){
			self.applyBindings(templateName, node);
		});
	};
	
	ko.Piccante.vm.BaseVM.apply(self);
};