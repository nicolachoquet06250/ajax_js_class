'use strict';

class Ajax {
	constructor(url = '', http_method = 'get', args = {}) {
		this.url = url;
		this.http_method = http_method.toUpperCase();
		this.args = args;
	}

	request(functions = {}) {
		let local_request = new XMLHttpRequest();

		local_request.open(this.http_method.toUpperCase(), this.url);

		local_request.send();

		local_request.onreadystatechange = () => {
			let return_params = {
				status: local_request.status,
				response: {
					get: (type = '') => {
						switch (type) {
							case 'text':
								return local_request.responseText;
							case 'xml':
								return local_request.responseXML;
							case 'json':
								return JSON.parse(local_request.responseText);
							default:
								return local_request.response;
						}
					},
					ready_state: local_request.readyState,
					type: local_request.responseType,
					headers: local_request.getAllResponseHeaders()
				}
			};

			if (local_request.readyState === 4 && local_request.status === 200) {
				if(functions.success) {
					return functions.success(return_params);
				}
			}
			if(functions.fail) {
				return functions.fail(return_params);
			}
		};

	}
}