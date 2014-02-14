/* global alert, require */
require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['jquery'], function ($) {
    'use strict';
    // use app here
    console.log('Running jQuery %s', $().jquery);

    $('#signUp').on('click', function(){
		alert('Welcome to Fight Club. The first rule of Fight Club is: you do not talk about Fight Club.');
	});

	$('#signIn').on('click', function(){
		alert('Are you ready for that? Checking into a Vegas hotel under a phony name with intent to commit capital fraud and a head full of acid?');
	});

	$('#facebook, #facebook-m').on('click', function(){
		alert('No cool quote found fo the Social Network.');
	});

	$('#google, #google-m').on('click', function(){
		alert('All that don\'t be evil thing was just baloney, I mean, the guys are getting ready to change the company\'s name to Skynet.');
	});
});
