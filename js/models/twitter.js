// oauth 対応する必要があるのでとりあえず放置

MyApp.Models.Twitter = Backbone.Model.extend({

	set: function(attrs, options) {

		// 日付をフォーマット
		if (attrs.created_at) {
			attrs.created_at = moment(attrs.created_at).format('YYYY/MM/DD HH:MM:SS');
		}

		return Backbone.Model.prototype.set.call(this, attrs, options);
	}

});