document.addEventListener("DOMContentLoaded", OnDOMLoaded);

function OnDOMLoaded() {
	//makeElementDrag(document.getElementById("mnav-button"), document.getElementById("mnav-button").getElementsByTagName("img")[0]);
	makeElementDrag(document.getElementById("mnav-img"));
	//document.getElementById("mnav-img").onclick = navClicked;
}

function navClicked(e) {
	/* document.getElementById("mnav-button").style.clipPath =
		"circle(150% at 10% calc(75vh + 4%))"; */
	let element = document.getElementById("mnav-button");
	if (element.dataset.expanded === "true") {
		element.dataset.expanded = "false";
	} else {
		element.dataset.expanded = "true";
	}
}

function makeElementDrag(dragElement) {
	if (dragElement == null) return;

	let oldPosY = 0;
	let newPosY = 0;

	let startY = 0;

	dragElement.touchstart = dragElement.onmousedown = (x) => {
		x.preventDefault();
		oldPosY = x.clientY;
		startY = oldPosY;

		document.getElementById("mnav-button").dataset.mdown = "true";

		document.touchend = document.onmouseup = (x) => {
			if (Math.abs(startY - x.clientY) < 2) {
				navClicked();
			}
			document.touchend = document.onmouseup = null;
			document.touchmove = document.onmousemove = null;

			document.getElementById("mnav-button").dataset.mdown = "false";
		};
		document.touchmove = document.onmousemove = (x) => {
			x.preventDefault();
			newPosY = oldPosY - x.clientY;
			oldPosY = x.clientY;

			dragElement.style.marginTop = dragElement.offsetTop - newPosY + "px";

			document
				.getElementById("mnav-button")
				.style.setProperty(
					"--clip-pos",
					"2.5rem calc(" + dragElement.style.marginTop + " + 1.5rem"
				);
		};
	};
}
