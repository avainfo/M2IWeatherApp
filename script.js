[...document.getElementById("container").children].forEach(element => {
	element.addEventListener("click", moveCursor)
	console.log(element)
})

document.getElementById("container").firstElementChild.style.color = "darkcyan"

function moveCursor(e) {
	let value = e.target.attributes.getNamedItem("data-value").value;
	document.getElementById("scrollbar").children[0].style.marginLeft = value;
	[...(e.target.parentElement.children)].forEach(element => {
		element.style.color = element.style.color == "darkcyan" ? "black" : "darkcyan";
		console.log(element.style.color)
	});
}