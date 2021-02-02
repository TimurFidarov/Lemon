let burger = document.querySelector('.burger');

let headerNavList = document.querySelector('nav .nav-list');

burger.onclick = function() {
	headerNavList.classList.toggle('open');
}
let counter = 0;

let addSection = document.querySelector('.advertisments-section');
let slider = document.querySelector('.advertisments-section .slider');

let slides = document.querySelectorAll('.advertisments-section .slide');

let btnPrev = document.querySelector('.btn-prev');

let btnNext = document.querySelector('.btn-next');
btnPrev.onclick = function() { slidePrev(slider) };
btnNext.onclick = function() { slideNext(slider) };


function slideNext(slider) {
	counter++;
	if (counter >= slides.length ) {
		counter = 0;
		slider.style.transform = 'translateX('+(slider.offsetWidth * counter)+'px)';
		return;
	}
	slider.style.transform = 'translateX('+(-slider.offsetWidth * counter)+'px)';
}

function slidePrev(slider) {
	counter--;
	if (counter < 0 ) {
		counter = +slides.length - 1; ;
		slider.style.transform = 'translateX('+(-slider.offsetWidth * counter)+'px)';
	}

	slider.style.transform = 'translateX('+( -slider.offsetWidth * counter)+'px)';
}


let easyBtn = document.querySelector('.recipe-bar_difficult-list li:first-child .btn');
let middleBtn = document.querySelector('.recipe-bar_difficult-list li:nth-child(2) .btn');
let longBtn = document.querySelector('.recipe-bar_difficult-list li:last-child .btn');
let difficultSections = document.querySelector('.recipe-bar_difficulty-sections');
let recipeBarSection = document.querySelector('.recipe-bar_section');

easyBtn.onclick = () => {
	easyBtn.classList.add('active_btn');
	middleBtn.classList.remove('active_btn');
	longBtn.classList.remove('active_btn', false);
	difficultSections.style.transform = 'translateX('+( -recipeBarSection.offsetWidth * 0)+'px)';
}
middleBtn.onclick = () => {
	easyBtn.classList.remove('active_btn', false);
	middleBtn.classList.add('active_btn', true);
	longBtn.classList.remove('active_btn', false);
	difficultSections.style.transform = 'translateX('+( -recipeBarSection.offsetWidth * 1)+'px)';
}
longBtn.onclick = () => {
	easyBtn.classList.remove('active_btn');
	middleBtn.classList.remove('active_btn');
	longBtn.classList.add('active_btn', true);
	difficultSections.style.transform = 'translateX('+( -recipeBarSection.offsetWidth * 2)+'px)';
}
