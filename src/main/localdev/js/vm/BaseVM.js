ko.Piccante.vm.BaseVM = function() {
	var self = this;

	self.applyBindings = function(templateName, target){
		var deferred = $.Deferred();
		ko.renderTemplate(templateName, self, {
			afterRender: function(){
				console.log("-- Rendered following template: ", templateName);
				deferred.resolve();
			}
		}, target[0]);
		return deferred.promise();
	};
	
	self.loadTemplate = function(templateName) {
		var deferred = $.Deferred();
		if ($('#' + templateName).length > 0) {
			deferred.resolve(templateName);
		} else {
			$.ajax({
				url: '/assets/templates/' + templateName + '.html'
			}).then(function(template) {
				$('body').append($('<script>', {
					id: templateName,
					type: 'text/html',
					text: template
				}));
				deferred.resolve(templateName);
			}, function(){
				deferred.reject;
			});
		}
		return deferred.promise();
	};

};