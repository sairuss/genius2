var li = document.querySelectorAll('header div li')
var nameli = document.querySelectorAll('header div li p')
console.log(nameli)
for (let i = 0; i < nameli.length; i++) {
	nameli[i].classList.add('hide');
}
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('mouseenter',function(){
		nameli[i].classList.remove('hide');
		nameli[i].classList.add('show');
	})
}
for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('mouseleave',function(){
		for (var j = 0; j < nameli.length; j++) {
			nameli[j].classList.remove('show');
			nameli[j].classList.add('hide');
		}
	})
}