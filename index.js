const DOM = {
	allthings: document.querySelector('#allthethings'),
	playerType: document.querySelectorAll('.player_type'),
	avatar: document.querySelectorAll('.avatar'),
	avatarContainer: document.querySelector('.avatar_container'),
	input:document.querySelectorAll(".input"),
	button:document.querySelectorAll(".button"),
	multiplayer:document.querySelector(".multiplayer"),

};
var audio = new Audio("sounds/hover .mp3" ) ;
var audio1 = new Audio("sounds/hi.mp3" ) ;
var audio2 = new Audio("sounds/bb.mp3" ) ;
var options=document.querySelector("#options");
options.addEventListener("click",function(){
	document.querySelector(".canvas").style.display="none";
	document.querySelector(".hidude").style.display="block";
	DOM.allthings.classList.add("hide");
	audio.play();
});
var back=document.querySelector(".back");

back.addEventListener("click",function(){
	document.querySelector(".canvas").style.display="block";
	DOM.allthings.classList.remove("hide");
	document.querySelector(".hidude").style.display="none";
});
var options=document.querySelector("#credits");
options.addEventListener("click",function(){
	document.querySelector(".canvas").style.display="none";
	document.querySelector(".hicredits").style.display="block";
	DOM.allthings.classList.add("hide");
	audio.play();
});
var back=document.querySelector(".backnew");
back.addEventListener("click",function(){
	document.querySelector(".canvas").style.display="block";
	DOM.allthings.classList.remove("hide");
	document.querySelector(".hicredits").style.display="none";
});
Array.from(DOM.playerType).map((item) => {
	item.addEventListener('click', function () {
		audio.play();
		DOM.allthings.classList.add('hide');
		if(this.textContent==="MULTIPLAYER")
		{
			document.querySelector(".canvas").style.display="none";
			document.body.style.background = "#f3f3f3 url('images/background_.jpg') ";
			DOM.input[1].classList.remove('hide');
			DOM.input[2].classList.remove('hide');
			var button=document.querySelector(".Mbutton");
			button.classList.remove('hide');
			DOM.multiplayer.classList.remove('hide');
			var p1b=0,p2b=0,p1g=0,p2g=0;
			document.querySelector(".canvas").classList.add("hide");
			var p2boy=document.querySelector("#p2boy");
			var p2girl=document.querySelector("#p2girl");
			p2boy.addEventListener("click",function(){
				audio1.play();
			(this).classList.toggle("boyy");
			p2girl.classList.remove("girll");
			p2b=1;p2g=0;
			});
			p2girl.addEventListener("click",function(){
				audio1.play();
			(this).classList.toggle("girll");
			p2boy.classList.remove("boyy");
			p2g=1;p2b=0;
			});

			var p1boy=document.querySelector("#p1boy");
			var p1girl=document.querySelector("#p1girl");
			p1boy.addEventListener("click",function(){
				audio1.play();
				(this).classList.toggle("boyy");
				p1girl.classList.remove("girll");
				p1b=1;p1g=0;
			});
			p1girl.addEventListener("click",function(){
				audio1.play();
				(this).classList.toggle("girll");
				p1boy.classList.remove("boyy");
				p1g=1;p1b=0;
			});

			
			

			button.addEventListener("click",function(){
				audio2.play();
 			var input=document.querySelectorAll("input");
 			if(input[1].value.length===0)
 				alert("Please Enter Player1 Name");
 			else if(p1b===0&&p1g===0)
 				alert("Please Select Player1 Avatar");
 			else if(input[2].value.length===0)
 				alert("Please Enter Player2 Name")
 			else if(p2b===0&&p2g===0)
 				alert("Please Select Player2 Avatar");
 			else{

				var player="Multiple";
				const input=document.querySelectorAll("input");
			 	localStorage.setItem("player1",input[1].value);
			 	localStorage.setItem("player2",input[2].value);
 				localStorage.setItem("p1b",p1b);
 				localStorage.setItem("p1g",p1g);
 				localStorage.setItem("p2b",p2b);
 				localStorage.setItem("p2g",p2g);
 				localStorage.setItem("player",player);
 				window.document.location='./tic-tak-toe.html';
			}
			});

			
		}
		else
		{
			document.querySelector(".canvas").style.display="none";
			DOM.avatarContainer.classList.remove('hide');
			DOM.input[0].classList.remove('hide');
			var button=document.querySelector(".Sbutton");
			button.classList.remove('hide');
			var b=0;
			var g=0;
			var boy=document.querySelector("#boy");
			var girl=document.querySelector("#girl");
			boy.addEventListener("click",function(){
				audio1.play();
			(this).classList.toggle("boyy");
			girl.classList.remove("girll");
			b=1;g=0;
			});
			girl.addEventListener("click",function(){
				audio1.play();
			(this).classList.toggle("girll");
			boy.classList.remove("boyy");
			g=1;b=0;
			});

			button.addEventListener("click",function(){
				audio2.play();
 			const input=document.querySelector("input").value;
 			if(input.length===0)
		 	alert("please enter player name");
			 else if(b===0&&g===0)
		 	alert("Please select Avatar");
			 else{
				
			 	var player="Single";
			 	localStorage.setItem("input",input);
 				localStorage.setItem("b",b);
 				localStorage.setItem("g",g);
 				localStorage.setItem("player",player);
 				window.document.location='./tic-tak-toe.html';
 				
			 	}
			
			});

		}
	});
});



// Array.from(DOM.button).map((item) => {
// 	item.addEventListener('click', function () {
// 		location.href = `tik-tak-toe.html?gen=${this.dataset.gen}`;
// 	});
// });



var i = 0;
function change() {
	var doc = document.getElementById("hi");
	var color = [ "steelblue", "yellow", "orange"];
	doc.style.color = color[i];
	i = (i + 1) % color.length;
}
setInterval(change, 500);




