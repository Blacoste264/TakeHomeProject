var ListContainerView = Backbone.View.extend({
	template: _.template($('#ListContainerView').html()),
    el: ".takehome_body",
 
    initialize: function () {
        _.bindAll(this, "render", "addOne", "addAll");
        this.collection.bind("reset", this.render);
        this.collection.bind("add", this.addOne);
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
    }
 
});