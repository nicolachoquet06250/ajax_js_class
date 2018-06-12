'use strict';

class Ajax {
	constructor(url = '', http_method = 'get', args = {}) {
		this.url = url;
		this.http_method = http_method;
		this.args = args;
	}

	request(async = false) {
		console.log(this.url);
		console.log(this.http_method);
		console.log(this.args);
	}
}

new Ajax(
	'http://localhost/rest/HelloWorld/test/',
	'get',
	[
		{test1: 'val'},
		{test: 'toto'}
	]
).request();