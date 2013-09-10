MyApp.Views.SearchBar = Backbone.View.extend({

	tmpl: MyApp.Templates.search_bar,

	events: {
		'click #btn_search': 'search'
	},

	initialize: function() {
		this.$el.html(this.tmpl());
	},

	search: function(e) {
		var $checked = this.$el.find('input[type=radio]:checked'),
			query = $('#query').val(),
			service = $checked.val(),
			search = {};

		e.preventDefault();

		search.query = query;
		search.service = service;

		// Globalイベントを発火
		MyApp.mediator.trigger('search', search);
		MyApp.mediator.trigger('search:' + service, search);
	}

});
