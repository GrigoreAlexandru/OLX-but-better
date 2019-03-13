// ==UserScript==
// @name         OLX but better
// @namespace    GA
// @version      0.1
// @description  OLX but better
// @author       Me
// @match        https://www.olx.ro/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	let matches = ['dezmembrez', 'piese', 'Dezmembrez', 'Piese', 'dejmembrez', 'Dejmembrez'];
	let posts = document.getElementsByClassName("wrap");
	let c = 0;

	Array.from(posts).forEach(function (post) {
		let postText = post.innerText.replace(/(\r\n|\n|\r)/gm, " ");

		for (let j = 0; j < matches.length; j++) {
			let match = matches[j];
			if (postText.includes(match)) {
				c++;
				post.remove();
			}
		}
	});
	console.log("Removed " + c + " posts");
})();
