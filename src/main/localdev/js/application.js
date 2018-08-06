crossroads.addRoute("/", function() {
	hasher.setHash("/home");
});

crossroads.addRoute("/home", function() {
	ko.Piccante._App.NavBar.activeView(ko.Piccante._App.NavBar.VIEWS[0]);
	ko.Piccante._App.render(new ko.Piccante.vm.PageHomeVM());
});

crossroads.addRoute("/team", function() {
	ko.Piccante._App.NavBar.activeView(ko.Piccante._App.NavBar.VIEWS[3]);
	ko.Piccante._App.render(new ko.Piccante.vm.PageTeamVM());
});

crossroads.addRoute("/jobs", function(){
	ko.Piccante._App.NavBar.activeView(ko.Piccante._App.NavBar.VIEWS[4]);
	ko.Piccante._App.render(new ko.Piccante.vm.PageJobsVM());
});

crossroads.addRoute("/contact", function(){
	ko.Piccante._App.NavBar.activeView(ko.Piccante._App.NavBar.VIEWS[5]);
	ko.Piccante._App.render(new ko.Piccante.vm.PageContactVM());
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