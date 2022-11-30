function createButtons(btn, lines) {
	const nav = document.querySelector('nav')
	const width = 10/lines.length
	let btns = ""
	for(let i=0;i<lines.length;i++) {
		const data = lines[i].split(';')
		btns+=btn.replace('${target}', data[1]).replace('${caption}', data[0]).replace('${w}', width+'%')
	}
	nav.innerHTML=btns
}

function getFile(link, f) {
	const xml = new XMLHttpRequest() 
	xml.onreadystatechange = function() { 
		if (xml.readyState===4 && xml.status==200) {
			f(xml.responseText) 
		}
	}
	xml.open("GET", link) 
	xml.send() 
}

getFile("x.csv", function(csv) {
	const lines = csv.split('\n') || csv.split('\r')
	getFile("przycisk.html", function(btn) { createButtons(btn, lines) })
})

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slider");
  let dots = document.getElementsByClassName("kropka");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}