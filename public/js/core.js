// Set Nav 'active' state
// var selection = $('.menu a');
//
// selection.on('click', function(){
// 		var el = $(this);
// 		el.addClass('active');
//
// 		console.log(el.attr('href'));
// });

$(document).ready(function () {
		switch (window.location.href) {

				case "http://localhost:8080/users":
						console.log('checking');
						$('#navbar-account').addClass('active');
						$('#navbar-home').removeClass('active');
						$('#navbar-download').removeClass('active');
						$('#navbar-help').removeClass('active');
						$('#navbar-about').removeClass('active');
						$('#navigation-login-button').removeClass('active');

						break;
				case "http://localhost:8080/login":
						$('#navbar-account').removeClass('active');
						$('#navbar-home').removeClass('active');
						$('#navbar-download').removeClass('active');
						$('#navbar-help').removeClass('active');
						$('#navbar-about').removeClass('active');
						$('#navigation-login-button').addClass('active');
						break;
				case "http://localhost:8080/":
						$('#navbar-account').removeClass('active');
						$('#navbar-home').addClass('active');
						$('#navbar-download').removeClass('active');
						$('#navbar-help').removeClass('active');
						$('#navbar-about').removeClass('active');
						$('#navigation-login-button').removeClass('active');
						break;
				case "http://localhost:8080/about":
						console.log('checking');
						$('#navbar-account').removeClass('active');
						$('#navbar-home').removeClass('active');
						$('#navbar-download').removeClass('active');
						$('#navbar-help').removeClass('active');
						$('#navbar-About').addClass('active');
						$('#navigation-login-button').removeClass('active');
						break;
				case "http://localhost:8080/account":
						console.log('checking');
						$('#navbar-account').addClass('active');
						$('#navbar-home').removeClass('active');
						$('#navbar-download').removeClass('active');
						$('#navbar-help').removeClass('active');
						$('#navbar-About').removeClass('active');
						$('#navigation-login-button').removeClass('active');
						break;
		}
		console.log("ready!");
		console.log(window.location.href);
});

