// LocalStorageのキーを設定
MyApp.Collections.SearchHistoryList = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage('mitsuruog_SPA_searchHistory')
});
