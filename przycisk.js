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