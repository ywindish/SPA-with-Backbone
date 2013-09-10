MyApp.Views.Tabs = Backbone.View.extend({

	tmpl: MyApp.Templates.tabs,

	events: {
		'click #tab>li': 'changeTab'
	},

	initialize: function () {

		this.$el.html(this.tmpl());	

		// 検索サービスごとのオプションを渡す

		// Twitter
		// (not implemented)
		// this.twitters = new MyApp.Views.SearchResults({
		// 	el: this.$el.find('#twitter_list'),
		// 	tmpl: MyApp.Templates.twitter,
		// 	collections: new MyApp.Collections.TwitterList(),
		// 	service: 'twitter'
		// });

		// Hotpepper
		this.hotppepers = new MyApp.Views.SearchResults({
			el: this.$el.find('#hotpepper_list'),
			tmpl: MyApp.Templates.hotpepper,
			collections: new MyApp.Collections.HotpepperList(),
			service: 'hotpepper'
		});

		// Globalイベント
		// 検索されたサービスのタブを表示させる
		MyApp.mediator.on('search', this.selectTab);
		MyApp.mediator.on('historySearch', this.selectTab);
	},

	selectTab: function(search) {
		$('a[href^=#' + search.service + ']').tab('show');
	},

	changeTab: function(e) {
		var service = this._getService(e.currentTarget);

		// Globalイベントを発火
		// タブ変更
		MyApp.mediator.trigger('changeTab', service);
	},

	_getService: function(tab) {
		// クリックされたタブからサービス名を拾う
		return $(tab).data('service');
	}
});
