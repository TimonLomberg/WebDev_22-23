document.addEventListener("DOMContentLoaded", OnDOMLoaded);

function OnDOMLoaded() {
	makeElementDrag(document.getElementById("mnav-img"));

	let langButton = document.getElementById("mnav-language");

	langButton.value = window.localStorage.getItem("lang") ?? "en";

	langButton.onchange = (e) => {
		window.localStorage.setItem("lang", langButton.value);
		location.reload();
	};
}

function navClicked(e) {
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

	let mnav = document.getElementById("mnav-button");

	dragElement.touchstart = dragElement.onmousedown = (x) => {
		x.preventDefault();
		oldPosY = x.clientY;
		startY = oldPosY;

		mnav.dataset.mdown = "true";

		document.touchend = document.onmouseup = (x) => {
			if (Math.abs(startY - x.clientY) < 2) {
				navClicked();
			}
			document.touchend = document.onmouseup = null;
			document.touchmove = document.onmousemove = null;

			mnav.dataset.mdown = "false";
		};
		document.touchmove = document.onmousemove = (x) => {
			x.preventDefault();
			newPosY = oldPosY - x.clientY;
			oldPosY = x.clientY;

			dragElement.style.marginTop =
				Math.min(
					mnav.clientHeight - mnav.clientHeight / 20,
					Math.max(0, dragElement.offsetTop - newPosY)
				) + "px";

			document
				.getElementById("mnav-button")
				.style.setProperty(
					"--clip-pos",
					"2.5rem calc(" + dragElement.style.marginTop + " + 1.5rem"
				);
		};
	};
}
