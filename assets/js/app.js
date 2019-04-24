
const colours = ['#9d0006', '#79740e', '#b57614', '#076678', '#8f3f71', '#427b58', '#af3a03'];

const index = Math.floor(Math.random() * colours.length)
document.getElementById('color-mask').style.background = colours[index];

nicknames = document.getElementsByClassName('nickname');
Array.prototype.forEach.call(nicknames, function(nickname){
	console.log(nickname);
	nickname.style.color = colours[index];
});

function itemOver(item) {
	item.style.color = colours[index];
}

function itemOut(item) {
	item.style.color = '#212529';
}
