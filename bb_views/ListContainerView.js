var ListContainerView = Backbone.View.extend({
	template: _.template($('#ListContainerView').html()),
    el: ".takehome_body",
 
    initialize: function () {

        this.collection.bind("reset", this.render);
        this.collection.bind("sort", this.sortStuff);
    },
 
    render: function () {
        console.log("render")
        console.log(this.collection.length);
		console.log(this)
        $(this.el).html(this.template());
        this.addAll();
    },
 
    addAll: function () {
        console.log("addAll")
        this.collection.each(this.addOne);
    },
 
    addOne: function (model) {
        console.log("addOne")
        view = new ItemView({ model: model });
        $("ul", this.el).append(view.render());
	},

	searchFilter: function() {
		this.searchFilter = e.target.value;
		this.trigger('change:searchFilter');
	},

	events: {
		"click #btn": "doStuff",
		"keyup #searchbox" : "searchFilter"
	},

 
});