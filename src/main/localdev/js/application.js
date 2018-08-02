crossroads.addRoute("/team", function() {
	// console.log("Route was changed to \"#/team\"");
	 ko.Piccante._App.NavBar.activeView.("team");
	// console.log("before the execution");
	 ko.Piccante._App.render(new ko.Piccante.vm.PageTeamVM());
	// console.log("after the execution");
});

crossroads.addRoute("/home", function() {
	ko.Piccante._App.NavBar.activeView(ko.Piccante._App.NavBar.VIEWS[0]);
	// console.log("breofe the execution");
	ko.Piccante._App.render(new ko.Piccante.vm.PageHomeVM());
	// console.log("after the execution");
});f

crossroads.addRoute("/", function() {
	hasher.setHash("/home");
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