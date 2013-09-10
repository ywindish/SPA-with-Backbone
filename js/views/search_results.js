
MyApp.Views.SearchResults = Backbone.View.extend({

	initialize: function () {
		_.bindAll(this, 'search', 'render');

		// 呼び出し元 (MyApp.Views.Tabs) から渡されたものを受け取る
		this.collections = this.options.collections;
		this.tmpl = this.options.tmpl;
		this.service = this.options.service;

		// Globalイベント
		// 検索サービスに応じた検索をする
		MyApp.mediator.on('search:' + this.service, this.search);
		MyApp.mediator.on('historySearch:' + this.service, this.search);

		// Localイベント
		// 検索が終わったあと, 描画する
		this.listenTo(this.collections, 'reset', this.render);
	},

	search: function(search) {
		// 検索の処理は抽象化されているのでメソッドを呼ぶだけ
		this.collections.search(search);
	},

	render: function() {
		this.$el.html(this.tmpl({
			models: this.collections.toJSON()
		}));
	}

});
