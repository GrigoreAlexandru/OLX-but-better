// ==UserScript==
// @name         OLX but better
// @namespace    GA
// @version      0.1
// @description  OLX but better
// @author       Me
// @match        https://www.olx.ro/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	var matches = ['dezmembrez', 'piese', 'Dezmembrez','Piese','dejmembrez','Dejmembrez'];
	var posts = document.getElementsByClassName("wrap");
	var c = 0;

	Array.from(posts).forEach(function(post) {

		var postText = post.innerText.replace(/(\r\n|\n|\r)/gm, " ");

		for (var j = 0; j < matches.length; j++) {
			var match = matches[j];
			if (postText.includes(match)){
				c++;
				post.remove();
			}
		}
	});
	console.log("Removed "+c+" posts");
})();