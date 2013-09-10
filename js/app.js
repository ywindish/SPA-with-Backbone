
MyApp.App = Backbone.View.extend({

	el: '#app',

	// テンプレート読み込み
	tmpl: MyApp.Templates.layout,

	initialize: function () {

		// Mediatorオブジェクト作成
		// Globalなイベントの仲介役となる (View-View間)
		MyApp.mediator = {};
		_.extend(MyApp.mediator, Backbone.Events);

		this.$el.html(this.tmpl());

		// 各Viewに、自分が受け持つ要素を引き渡す

		// 検索履歴
		this.history = new MyApp.Views.History({
			el: this.$el.find('#history_list'),
			// 永続化用のオブジェクトを渡す
			searches: new MyApp.Collections.SearchHistoryList()
		});

		// 検索バー
		this.searchBar = new MyApp.Views.SearchBar({
			el: this.$el.find('#header')
		});

		// タブ
		this.tabs = new MyApp.Views.Tabs({
			el: this.$el.find('#search_results')
		});

		// フッタ
		this.footer = new MyApp.Views.Footer({
			el: this.$el.find('#footer')
		});

	}

});

new MyApp.App();
