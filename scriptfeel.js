import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
 stages: [

    { target: 15, duration: '3m' },

    { target: 25, duration: '3' },


    { target: 35, duration: '3m' },

    { target: 0, duration: '3m' },

  ],

};

export default function() {

	group("page_2 - https://www.feelcentercity.it/Epaca/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/",
			"params": {
				"headers": {
					"cache-control": "max-age=0",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"sec-ch-ua-mobile": "?0",
					"upgrade-insecure-requests": "1",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"sec-fetch-site": "none",
					"sec-fetch-mode": "navigate",
					"sec-fetch-user": "?1",
					"sec-fetch-dest": "document",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",
					"if-modified-since": "Mon, 15 Mar 2021 11:47:33 GMT"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/Build/Build.loader.js",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/unity-logo-dark.png",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/progress-bar-empty-dark.png",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/progress-bar-full-dark.png",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/webgl-logo.png",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/fullscreen-button.png",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/TemplateData/style.css",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/Build/Build.framework.js.unityweb",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/Build/Build.wasm.unityweb",
			"params": {
				"headers": {
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"Referer": "https://www.feelcentercity.it/Epaca/",
					"sec-ch-ua-mobile": "?0",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/TemplateData/favicon.ico",
			"params": {
				"headers": {
					"pragma": "no-cache",
					"cache-control": "no-cache",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "no-cors",
					"sec-fetch-dest": "image",
					"referer": "https://www.feelcentercity.it/Epaca/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		sleep(0.64);
		req = [{
			"method": "get",
			"url": "https://www.feelcentercity.it/Epaca/Build/Build.data.unityweb",
			"params": {
				"headers": {
					"cache-control": "no-cache",
					"sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
					"if-modified-since": "Tue, 16 Mar 2021 15:23:28 GMT",
					"sec-ch-ua-mobile": "?0",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
					"accept": "*/*",
					"sec-fetch-site": "same-origin",
					"sec-fetch-mode": "cors",
					"sec-fetch-dest": "empty",
					"referer": "https://www.feelcentercity.it/Epaca/",
					"accept-encoding": "gzip, deflate, br",
					"accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
