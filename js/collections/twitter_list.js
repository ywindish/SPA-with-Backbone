MyApp.Collections.TwitterList = Backbone.Collection.extend({

	// see: https://dev.twitter.com/docs/api/1.1/get/search/tweets
	// oauth がいるのでとりあえず放置

	url: 'https://api.twitter.com/1.1/search/tweets.json',

	model: MyApp.Models.Twitter,

	search: function(param) {
		this.fetch({
			data: {
				q: encodeURIComponent(param.query)
			},
			dataType: 'jsonp'
		});
	},

	parse: function(response, options) {
		// Twitter API のレスポンスからツイートのリストを抜き出して返す
		this.response = response;
		return response.statuses;
	}
});
