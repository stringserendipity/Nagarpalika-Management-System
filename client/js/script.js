// $(function() {

//const { response } = require("express");

//     $('#login-form-link').click(function(e) {
// 		$("#login-form").delay(100).fadeIn(100);
//  		$("#register-form").fadeOut(100);
// 		$('#register-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});
// 	$('#register-form-link').click(function(e) {
// 		$("#register-form").delay(100).fadeIn(100);
//  		$("#login-form").fadeOut(100);
// 		$('#login-form-link').removeClass('active');
// 		$(this).addClass('active');
// 		e.preventDefault();
// 	});

// });
// document.addEventListener("DOMContentLoaded",
// 	function (event){
// 		document.querySelector("#login"){
// 			console.log("Hello");
// 		}
// 	}
// );
//var username=0;
//var password=0;
$(() => {
	$('#login-form').on('submit', function (event) {
		event.preventDefault();
		console.log('submit');

		console.log(event.target.Username.value);
		console.log(event.target.Password.value);
		username = event.target.Username.value;
		password = event.target.Password.value;
		if(username==="ward" && password==="ward" || username==="zone" && password==="zone"){
			console.log(true);
			if(username==="ward")
				window.location.href = "./ward.html";
			else
				window.location.href = "./zonal.html";
		}
		else{
			fetch('http://localhost:5000/login',{
				method:'POST',
				headers:{
					'content-type':"application/json"
				},
				body:JSON.stringify({
					uid:event.target.Username.value,
					pwd:event.target.Password.value
				}),
			}).then(response=>response.json())
			.then(data=>{
				var output = data['data'];
				console.log(output);
				if(data===undefined || data===null|| output.length===0){
					console.log(false);
					$('#wrong').text("Wrong Credentials")
				}
				else {
					console.log(true+" "+output.length);
					window.location.href="./profile.html";
				}
			})
		}
		//export{username,password};
	})
})