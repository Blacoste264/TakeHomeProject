var ItemView = Backbone.View.extend({
    tagName: "li",
    template: _.template($('#ItemView').html()),
 
    // initialize: function () {
    //     _.bindAll(this, 'render');
    // },
 
    render: function () {
        return $(this.el).append(this.template(this.model.toJSON())) ;
    }
})
