crossroads.addRoute("#/team", function() {
	console.log("Route was changed to \"#/team\"");
	ko.Piccante._App.activeView("team");
	console.log("this is the teamview");
});

crossrads.addRoute("#/home", function(){
	console.log("The following route was changed to #/team");
	ko.Piccante._App.activeView("home");
	ko.Piccante._App.render(new ko.Piccante.vm.PageHomeVM());
});

crossroads.addRoute("/", function(){
	hasher.setHash("#/home");
});

// Namespace
ko.Piccante = {
	conf : {},
	vm : {}
};

hasher.initialized.add(function(h) {
	crossroads.parse(h);
	console.log("Initial Route: ", h);
});

hasher.changed.add(function(h) {
	crossroads.parse(h);
	console.log("Changed Route to: ", h);
});

// Initial function
$(function() {
	console.log("Coming in");
	ko.Piccante._App = new ko.Piccante.vm.AppVM();
	ko.applyBindings(ko.Piccante._App);
	hasher.init();
});