MyApp.Views.History = Backbone.View.extend({

	tmpl: MyApp.Templates.history,

	events: {
		// 削除ボタンで履歴を削除
		'click .btn_delete': 'removeHistory',
		// 検索履歴がクリックされたら再検索
		'click .history_contents': 'searchHistory'
	},

	initialize: function () {
		// callbackでthisが消失するのを防ぐ
		_.bindAll(this, 'addHistory', 'removeHistory', 'searchCurrentHistory', 'render');

		this.searches = this.options.searches;

		this.searches.fetch();
		this.render();

		// Globalイベント
		// 検索されたら履歴に追加する
		MyApp.mediator.on('search', this.addHistory);
		// タブ変更されたらそのタブに対応したサービスの直近の検索結果で再検索する
		MyApp.mediator.on('changeTab', this.searchCurrentHistory);

		// Localイベント
		// 検索履歴の追加と削除をlistenする
		this.listenTo(this.searches, 'add remove', this.render);
	},

	addHistory: function(search) {
		// 日時をidとしてLocalStorageに追加
		search.id =+ new Date();
		this.searches.create(search);
	},

	removeHistory: function(e) {
		// idを指定して削除
		var id = this._getHistory(e).id;
		this.searches.get(id).destroy();
	},

	searchHistory: function(e) {
		var history = this._getHistory(e);

		// Globalイベントを発火する
		MyApp.mediator.trigger('historySearch', history);
		MyApp.mediator.trigger('historySearch:' + history.service, history);	
	},

	searchCurrentHistory: function(service) {
		var historys = [],
			history;

		historys = this.searches.where({
			service: service
		});

		if (historys.length) {
			// LocalStorageから検索してきた最初の１件を取り出す
			// 最新ではなく、いちばん古いものが出てきてるみたい
			history = historys[0].attributes;

			// Globalイベントを発火
			MyApp.mediator.trigger('historySearch', history);
			MyApp.mediator.trigger('historySearch:' + service, history);
		}
	},

	render: function() {
		this.$el.html(this.tmpl({
			history: this.searches.toJSON()
		}));
	},

	_getHistory: function(e) {
		var history = {};
		var $target = $(e.target).closest('.history');

		history.id = $target.attr('data-id');
		history.service = $target.find('.service').text().replace(/^\(|\)$/g, '');
		history.query = $target.find('.query').text();

		return history;
	}

});
