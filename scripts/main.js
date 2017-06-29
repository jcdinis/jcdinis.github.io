var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');



myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nova_zelandia.jpg'){
		myImage.setAttribute('src', 'images/image_1.jpg');
	} else {
		myImage.setAttribute('src', 'images/nova_zelandia.jpg')
	}
}



function setUserName(){
	var myName = prompt('Please enter you name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Quem é o melhor,'+ myName;
}


if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Jairson é o melhor,' + storedName;
}



myButton.onclick = function(){
	setUserName();
}