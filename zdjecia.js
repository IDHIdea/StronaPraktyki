function createImages(img, lines) {
	const nav = document.querySelector('nav')
	let imgs = ""
	for(let i=0;i<lines.length;i++) {
		const data = lines[i].split(';')
		imgs+=img.replace('${target}', data[0]).replace('${caption}', data[1]).replace('${caption}', data[1])
	}
	nav.innerHTML=imgs
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

getFile("zdjecia.csv", function(csv) {
	const lines = csv.split('\n') || csv.split('\r')
	getFile("zdjecia.html", function(img) { createImages(img, lines) })
})