// turns the line red
function redLine() {
	let line = document.getElementById("line-shape");
	line.classList.add("red");
}

// event handler
document.getElementById("redButton").addEventListener("click", redLine);

// hover to make circle orange
function orangeCircle() {
	let circle = document.getElementById("circle-shape");
	circle.classList.toggle("orange");
}

// event handler
document.getElementById("circle-shape").addEventListener("mouseover", orangeCircle);