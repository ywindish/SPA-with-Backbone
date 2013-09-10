
// 元のチュートリアルはたぶん, ビルドしてここのコードを生成しているが
// 今回は, HTMLに埋め込んだテンプレートをjQueryで読み込んで返すようにしてみた

MyApp.Templates.footer = function(content) {
	var source = $("#footer-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.history = function(content) {
	var source = $("#history-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.hotpepper = function(content) {
	var source = $("#hotpepper-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.layout = function(content) {
	var source = $("#layout-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.search_bar = function(content) {
	var source = $("#search_bar-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.tabs = function(content) {
	var source = $("#tabs-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};

MyApp.Templates.twitter = function(content) {
	var source = $("#twitter-template").html();
	var template = Handlebars.compile(source);
	return template(content);
};
